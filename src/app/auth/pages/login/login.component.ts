import { Component, inject } from '@angular/core';
import { UsersService } from "../../../users/users.service";
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email:    ['sistemas@amazonastrading.com', [ Validators.required, Validators.email ]],
    password: ['Am4z0n4s*', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/productores'),
        error: (message) => {
          Swal.fire('Error', message, 'error' )
        }
      })

      console.log(email,password);
      

  }


}