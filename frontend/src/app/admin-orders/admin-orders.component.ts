import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class Booking {
  constructor(
    public id:number,
    public name:string,
    public email:string,
    public carType:string,
    public serviceplan:string,
    public vehiclenumber:string,
    public address:string,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:string


  )
{}
  }

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders:Booking[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getorders();
  }

  getorders(){
    this.http.get<any>('http://localhost:4005/order/findOrders').subscribe(
      response=>{
        console.log(response);
        this.orders=response.orders;
        
      }
    );
  }


}
