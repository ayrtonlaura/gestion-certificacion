
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})
export class UsersService {

  userToken: string;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  // login(user: any): Observable<any> {
  //   return this.http.post("https://atp-sgc-api.herokuapp.com/api/auth/login", user);
  // }

  setToken(token: String) {
    this.cookies.set("token", 'token'  );
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

  //Udemy

  // const authData = {
  //   ...UsuarioModel,
  //   returnSecureToken: true
  // };
  private guardarToken( idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else{
      this.userToken = '';
    }
    return this.userToken;
  }


}