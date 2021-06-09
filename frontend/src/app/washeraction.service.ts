import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WasheractionService {

  public _subject=new BehaviorSubject<any>('');

  emit<T>(data:T){
    this._subject.next(data);
  }

  on<T>():Observable<T>{
    return this._subject.asObservable();
  }

  

}
