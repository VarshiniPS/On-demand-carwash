import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }
  //service(data):Observable<any>{
    //return this.http.post(data);
  //}
  login(data):Observable<any>{
    return this.http.post(`${url}auth/login`,data);
  }
}
