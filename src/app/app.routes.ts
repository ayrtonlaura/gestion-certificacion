import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component"; 

const app_routes: Routes =[
    {path: 'home', component: Comment },
    {path: 'about', component: Comment },
    {path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);