import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Car{
  constructor(
    public _id : String,
    public name: String
  ){

  }
}

@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.css']
})
export class AdminCarComponent implements OnInit {

  cars:Car[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCar();
  }
  getCar(){
    this.httpClient.get<any>('http://localhost:4000/admin/car-func/findAllCars').subscribe(
      response=>{
        console.log(response);
       this.cars=response;
        
      }
    );
    }

}
