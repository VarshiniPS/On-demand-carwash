import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import  { OrderService } from '../order.service';

export class cars{
  constructor(
     public _id:String,
     public name:string
  ){
    
  }
}

@Component({
  selector: 'app-carbrand',
  templateUrl: './carbrand.component.html',
  styleUrls: ['./carbrand.component.css']
})

export class CarbrandComponent implements OnInit {

selectedcar:any='';
Cars:cars[]=[];

  constructor( private http:HttpClient,private router:Router,private orderservice:OrderService) { }
  
  ngOnInit(): void {
    this.getcars();
  }

  getcars(){
    this.http.get<any>('http://localhost:4000/admin/car-func/findAllCars').subscribe(
      response=>{
        console.log(response);
        this.Cars=response;
      }
    );
  }

  
  buttonChangeHandler (event:any){
    this.selectedcar=event.target.value;
    console.log(this.selectedcar);
    this.orderservice.emit<any>(this.selectedcar);
    this.gotomodel('carmodel');
    //this.router.navigate(['carmodel']);
    
  }

  gotomodel(pageName:string):void{
    this.router.navigate([`${pageName}`])

  }


}
