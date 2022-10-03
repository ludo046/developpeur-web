const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

module.exports = {
    register: function(req, res) {

        console.log(req.body);
        
        const lastname = req.body.NewUser.lastname;
        const firstname = req.body.NewUser.firstname;
        const society = req.body.NewUser.society;
        const phone = req.body.NewUser.phone;
        const email = req.body.NewUser.email;
        const password = req.body.NewUser.password;

        if (lastname === null || firstname === null || phone === null || email === null || password === null){
            return res.status(400).json({'error': 'missing parameters'})
        }

        models.Users.findOne({
            attributes: ['email'],
            where: {
                email: email
            }
        }).then(function(userFound){
            if(!userFound){
                bcrypt.hash(password, 10, function(err, bcryptedPassword){
                    const newUser = models.Users.create({
                        lastname: lastname,
                        firstname: firstname,
                        society: society || null,
                        phone: phone,
                        email: email,
                        password: bcryptedPassword,
                        isAdmin: 0
                    }).then(function (newUser){
                        return res.status(201).json({
                            'userId': newUser.id,
                            token: jwtUtils.generateTokenForUser(newUser)
                        })
                    }).catch(function(err){
                        return res.status(500).json({'error': 'canot add user'})
                    })
                })
            } else {
                return res.status(409).json({'error': 'user already exist'})
            }
        })
    },
    
    login: function(req, res) {
        const email = req.body.LogUser.email;
        const password = req.body.LogUser.password;

        if (email == null || password == null){ 
        return res.status(400).json({ 'error': 'missing parameters'})
    };
    models.Users.findOne({
        where: {email: email}
    })
    .then(function(userFound){
        if (userFound){
            bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
                if (resBycrypt){
                    return res.status(200).json({
                        'userId': userFound.id,
                        'isAdmin': userFound.isAdmin,
                        token: jwtUtils.generateTokenForUser(userFound)
                    })
                } else {
                    return res.status(403).json({ 'error': 'invalid password' })
                }
            })
        } else {
            return res.status(404).json({ 'error': 'user not exist in DB' })
        }
    })
    .catch(function(err){
        return res.status(500).json({ 'error': 'unable to verify user' });
    })
    }
}