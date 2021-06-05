import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Service{
  constructor(
    public _id: String,
    public serviceType: String,
    public name: String,
    public price: Number,
    public description: String,
    public timeRequired: String,
    public where:string
  ){

  }
}

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {

  services:Service[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getServices();
  }
  getServices(){
    this.httpClient.get<any>('http://localhost:4000/admin/car-services/findAll').subscribe(
      response=>{
        console.log(response);
       this.services=response.service;
     
      }
    );
}

}
