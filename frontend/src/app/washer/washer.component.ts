import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washer',
  templateUrl: './washer.component.html',
  styleUrls: ['./washer.component.css']
})
export class WasherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  gotohome(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }

}
