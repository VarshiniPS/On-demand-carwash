import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

export class Services{
  constructor(
    public _id:number,
    public serviceType:string,
    public name:string,
    public description:string,
    public timeRequired:string,
    public where:string
  ){

  }
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
  
})
export class ServicesComponent implements OnInit {
services:Services[]=[];
//selectedservice:Services;
  constructor(private router:Router,private http:HttpClient) {
    
   }

  ngOnInit(){
    this.getServices();
  }

  getServices(){
  this.http.get<any>('http://localhost:4000/admin/car-services/findAll').subscribe(
    response=>{
      console.log(response);
      this.services=response;
      }
  );
}
}
