import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrls: ['./carmodel.component.css']
})
export class CarmodelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  name(pageName:string):void{
    this.router.navigate([`${pageName}`])
}
}
