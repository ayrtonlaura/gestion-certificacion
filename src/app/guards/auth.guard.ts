import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}
  
  canActivate(): boolean {
    console.log('Guard');
    if(this.auth.estaAutenticado()){
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
    
  }
  
}
