import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Washer{
  constructor(
    public _id: String,
    public name: String,
    public email: String,
    public password: String,
    public mobile: number,
    public role: String,
    public status:string
  ){

  }
}
@Component({
  selector: 'app-admin-washer',
  templateUrl: './admin-washer.component.html',
  styleUrls: ['./admin-washer.component.css']
})
export class AdminWasherComponent implements OnInit {

  washers:Washer[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getWashers();
  }
  getWashers(){
    this.httpClient.get<any>('http://localhost:4000/admin/washer/findAll').subscribe(
      response=>{
        console.log(response);
       this.washers=response.washer;
     }
    );
}

}
