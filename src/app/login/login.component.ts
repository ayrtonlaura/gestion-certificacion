import { Component } from '@angular/core';
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';

import {NgForm} from '@angular/forms'
import { UsuarioModel } from 'app/models/usuario.model';
import { AuthService } from 'app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private router: Router, private auth: AuthService) {}

  // login() {
  //   console.log(this.email);
  //   console.log(this.password);
  //   const user = {email: this.email, password: this.password};
  //   this.userService.login(user).subscribe( data => {
  //     this.userService.setToken(data.token);
  //     this.router.navigateByUrl('/');
  //     console.log(data);
  //   });
  // }

  //Udemy
  login(form:NgForm){

    if( form.invalid){ return;}
    
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.login( this.usuario).subscribe( resp =>{
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/productores');
    }, (err) =>{
      console.log(err.error.message);
      Swal.fire({
        icon: 'error',
        title:'Error al autenticar',
        text: err.error.message
      });
      
    })
    
  }
}