import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  service():Observable<any>{
    return this.http.get<any[]>('http://localhost:4000/admin/car-services/findAll');
  }
}

