import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WasheractionService {
sendaction=new Subject();

  constructor() { }

communicateaction(action){
  this.sendaction.next(action);
}

}
