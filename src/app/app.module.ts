import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CookieService } from 'ngx-cookie-service';

//Datepicker

//Rutas
import { app_routing } from './app.routes';

import { LoginComponent } from './auth/pages/login/login.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './recepcion/ticket/ticket.component';
// import { TicketComponent } from './recepcion/ticket/ticket.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'ticket', component: TicketComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '',   redirectTo: '/ticket', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    app_routing
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HomeComponent,
    // TicketComponent,

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
