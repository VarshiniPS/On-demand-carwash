import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }
  //service(data):Observable<any>{
    //return this.http.post(data);
  //}
}
