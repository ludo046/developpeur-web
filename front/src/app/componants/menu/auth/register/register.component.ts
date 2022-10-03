import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      lastname: this.formBuilder.control('',[Validators.required, Validators.minLength(2)]),
      firstname: this.formBuilder.control('',[Validators.required,Validators.minLength(2)]),
      society: this.formBuilder.control(''),
      phone: this.formBuilder.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email: this.formBuilder.control('',Validators.required),
      password: this.formBuilder.control('',[Validators.required,Validators.minLength(8)])
    })
  }

  register():void{    
    const formRegister = {
      lastname: this.registerForm.get('lastname').value,
      firstname: this.registerForm.get('firstname').value,
      society: this.registerForm.get('society').value,
      phone: this.registerForm.get('phone').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }
    console.log(formRegister);
    
    this.userService.register(formRegister).subscribe(newUser => {
      sessionStorage['session'] = JSON.stringify(newUser);
      this.router.navigate(['/home']);
    })
  }

}
