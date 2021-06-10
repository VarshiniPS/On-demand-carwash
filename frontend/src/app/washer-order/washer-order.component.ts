import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WasheractionService } from '../washeraction.service';

export class custorders {
  constructor(
    public id:number,
    public name:string,
    public email:string,
    public carType:string,
    public serviceplan:string,
    public address:string,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:string


  )
{}
  }

@Component({
  selector: 'app-washer-order',
  templateUrl: './washer-order.component.html',
  styleUrls: ['./washer-order.component.css']
})
export class WasherOrderComponent implements OnInit {
  orders:custorders[]=[];
  selectedaction:any=[];
  radio:any=['accepted','rejected'];

  constructor(private http: HttpClient,private washeraction:WasheractionService) { }

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

   updatestatus(id,updatebody){
   const  url='http://localhost:4005/orders/'+id;
     return this.http.patch(url,updatebody);
   }
  
  }

