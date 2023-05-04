
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError, map, BehaviorSubject } from "rxjs";
import { CookieService } from "ngx-cookie-service";

import { environment } from '../../environments/environment';
import { User, UserResponse } from "app/shared/moduls/user.interface";
import {JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: "root"
})
export class UsersService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.checkToken();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }


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

  //YT
  login(authData:User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}` , authData)
    .pipe(
      map( (res:UserResponse) =>{
        this.saveToken(res.token)
        this.loggedIn.next(true);
        return res;
      }),
      catchError( (err) => this.handlerError(err))
    )
  }
  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  private checkToken ():void{
    const userToken = localStorage.getItem('token');
    const isExired = helper.isTokenExpired(userToken);
    console.log('isExpired->',isExired);

    isExired ? this.logout() : this.loggedIn.next(true);
     
    // if (isExired){
    //   this.logout();
    // } else {
    //   this.loggedIn.next(true);
    // }
    
    // set userisLogged = isExpired
  }
  private saveToken (token:string):void{
    localStorage.setItem('token', token);
  }
  private handlerError (err):Observable<never>{
    let errorMessage = 'An error occured retrienving data';
    if(err){
      errorMessage=  `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}