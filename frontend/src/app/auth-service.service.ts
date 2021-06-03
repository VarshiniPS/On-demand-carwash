import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl,wUrl,url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${baseUrl}auth/login`,data);
  }
  adminlogin(data: any):Observable<any>{
    
    return this.http.post(`${url}auth/login`,data);
  }

  washerlogin(data: any):Observable<any>{
    
    return this.http.post(`${wUrl}account/login`,data);
  }
  
}

