import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { RestService } from './rest.service';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private authService = inject( AuthService );
  private router = inject( Router );

  constructor(private RestService:RestService){}
  ngOnInit(): void {
    this.cargarData();
    
  }

  public cargarData(){
    this.RestService.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(respuesta =>{
      console.log(respuesta);
      
    })
  }

  public authStatusChangedEffect = effect(() => {

    switch( this.authService.authStatus() ) {

      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/productores');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/login');
        return;

    }
  });

}
