import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import  { ServiceplanService } from '../serviceplan.service';

export class Services{
  constructor(
    public _id:Number,
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
  selectedservice:any ='';
services:Services[]=[];
  constructor(private router:Router,private http:HttpClient,private serviceplan:ServiceplanService) {
    
   }
  ngOnInit(){
    this.getServices();
  
  }

  getServices(){
  this.http.get<any>('http://localhost:4000/admin/car-services/findAll').subscribe(
    response=>{
      console.log(response);
      this.services=response.service;
      }
  );
}


selectedService (event:any){
    this.selectedservice=event.target.value;
    console.log(this.selectedservice);
    this.serviceplan.emit<any>(this.selectedservice);
    this.gotoorder('order');
    //this.gotoorder('order');
    //this.router.navigate(['carmodel']);
}

gotoorder(pageName:string):void{
  this.router.navigate([`${pageName}`])
  }


}



