import { Component, OnInit} from '@angular/core';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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

}
