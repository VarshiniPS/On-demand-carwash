import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotohome(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }

}
