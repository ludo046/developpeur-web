export interface NewUser {
    lastname: String;
    firstname: String;
    society: String;
    phone: String;
    email: String;
    password: String;
}

export interface LogUser {
    email: String;
    password: String;
}