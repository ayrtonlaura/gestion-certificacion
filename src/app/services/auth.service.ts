import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { UsuarioModel } from "app/models/usuario.model";
import { map } from 'rxjs/operators'
import { log } from "console";

@Injectable({
    providedIn: 'root'
})

export class AuthService {


    

    private url = 'https://atp-sgc-api.herokuapp.com/api/auth/login';

    userToken: string;

    constructor( private http: HttpClient){
        this.leerToken();
    }


    //Udemy

  // const authData = {
  //   ...UsuarioModel,
  //   returnSecureToken: true
  // };

  logout(){
    localStorage.removeItem('token');
  }
  login ( usuario: UsuarioModel) {
    const authData = {
        ...usuario
    };

    return this.http.post(
        `${this.url}`,authData
    ).pipe(
        map( resp =>{
            console.log('Entro en el mapa RXJS');
            this.guardarToken( resp['token']);
            
            return resp;

        })
    )
  }

  private guardarToken( idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
    console.log(idToken);
    
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else{
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado():boolean{

    return this.userToken.length > 2;
  }
}


