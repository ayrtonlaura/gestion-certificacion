import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms'
import { userInfo } from 'os';
import {User} from '../shared/moduls/user.interface'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // email: string;
  // password: string;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  })
  constructor(private userService: UsersService, private router: Router, private fb: FormBuilder) {}

  // login() {
  //   console.log(this.email);
  //   console.log(this.password);
  //   const user = {email: this.email, password: this.password};
  //   console.log(user);
  //   this.userService.login(user).subscribe( data => {
  //     this.userService.setToken(data.token);
  //     this.router.navigateByUrl('/');
  //     console.log(data);
  //   });

  // }

  //YT
  ngOnInit(): void{
    const userData = {
      username: 'cangulo',
      password: 'Am4z0n4s*',
    };
    this.userService.login(userData).subscribe( res => console.log('Login')
    );
  }

  onLogin():void{

    const formValue = this.loginForm.value;
    const user:User = {
      username: formValue.username,
      password: formValue.password
    }
    this.userService.login(user).subscribe( (res)=>{
      if (res){
        this.router.navigate(['']);
      }
    });
  }
 
}