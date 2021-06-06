import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomersignupService {
  url='http://localhost:4001/customer/auth/signup'

  constructor(private http:HttpClient) { }
  custsignup(signupdata:SignupData){
    return this.http.post<any>(this.url,signupdata)
    }
}

export interface SignupData{
  name:any,
  email:any,
  password:any
}

