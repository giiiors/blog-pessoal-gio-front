import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import {Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  


  entrar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)

  }

  cadastrar(user: User):Observable<User>{
    return this.http.post<User>('http://locahost:80808/usuarios/cadastrar', user)



  }


}
