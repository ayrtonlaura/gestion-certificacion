import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


import UsersJson from '../../usuarios.json';
 


interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
  fecha: String;
  transportistas: String;
  pesoBrutoO: String;
  merma: Number;
  pesoBrutoI: String;
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  title = 'appBootstrap';

  name = new FormControl('');
  
  updateName() {
    this.name.setValue('Nancy');
  }

  Users: USERS[] = UsersJson;
  
  model;
  constructor() {
    console.log(this.Users);
   }

  ngOnInit() {
  }



}
