import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class cars{
  constructor(
     public _id:Number,
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

Cars:cars[];

  constructor( private http:HttpClient,private router:Router) { }

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

  gotomodel(pageName:string):void{
    this.router.navigate([`${pageName}`])

  }

}
