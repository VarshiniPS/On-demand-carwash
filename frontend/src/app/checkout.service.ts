import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url='http://localhost:4005/order/addorder';
  constructor(private http:HttpClient) { }

  placeorder(checkoutdata:CheckoutData){
  return this.http.post<any>(this.url,checkoutdata)
  }
}

export interface CheckoutData{
  name:any,
  email:any,
  cartype:any,
  serviceplan:any,
  vehiclenumber:any,
  address:any
}

