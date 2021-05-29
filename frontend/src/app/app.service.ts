import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }
getServices():Observable<any>{
  return this.httpClient.get('http://localhost:4001/customer/order/findOrders');
}
}
