import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { LogUser, NewUser } from '../../models/users.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  register(NewUser: NewUser){
    return this.httpClient.post(`${this.apiUrl}users/register/`,{NewUser});
  }

  login(LogUser: LogUser){
    return this.httpClient.post(`${this.apiUrl}users/login/`,{LogUser})
  }
}
