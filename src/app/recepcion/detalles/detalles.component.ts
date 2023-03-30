import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  title = 'appBootstrap';
  
  model;
  constructor() { }

  ngOnInit() {
  }

}
