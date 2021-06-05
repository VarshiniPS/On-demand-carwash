import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url='http://localhost:4005/order/addorder';
  constructor(private http:HttpClient) { }

  placeorder(checkoutdata){
  return this.http.post<any>(this.url,checkoutdata)
  }
}
