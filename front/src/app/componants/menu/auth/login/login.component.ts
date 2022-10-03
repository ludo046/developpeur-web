import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup

  constructor(private formBuilder: UntypedFormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('',[Validators.required, Validators.minLength(2)]),
      password: this.formBuilder.control('',[Validators.required, Validators.minLength(2)])
    });
  }

  login():void{
    const formLogin = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }; 
    this.userService.login(formLogin).subscribe(userLog => {
      sessionStorage[`session`] = JSON.stringify(userLog);
      this.router.navigate(['/home'])
    })
  }
}
