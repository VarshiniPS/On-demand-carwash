import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { ServiceplanService} from '../serviceplan.service';
import { PersonaldetailService } from '../personaldetail.service';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';
import { MybookingsService } from '../mybookings.service';
import { WasheractionService } from '../washeraction.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orderform:FormGroup;
public cartype=''; 
public serviceplanchosen='';
public personaldetails:any='';
public orderaction:any='';
public bookingaction:any='';

constructor(private orderservice: OrderService,private serviceplan:ServiceplanService,private personaldetail:PersonaldetailService,private formbuilder:FormBuilder
 ,private http:HttpClient,private checkoutservice:CheckoutService,private router:Router,private booking:MybookingsService,private washeraction:WasheractionService,private modalService: NgbModal ) {
  this.orderform=formbuilder.group({
  name:[''],
  email:[''],
  carType:[''],
  serviceplan:[''],
  vehiclenumber:['',Validators.required],
  address:['',Validators.required]
});
}

ngOnInit(): void {
    this.orderservice.on<any>().subscribe(data=>{
        this.cartype=data;
       
      });
      this.serviceplan.on<any>().subscribe(data=>{
        this.serviceplanchosen=data;
      });
      this.personaldetail.on<any>().subscribe(data=>{
        this.personaldetails=data;
      });

      this.orderform.patchValue({
        name:this.personaldetails.name,
        email:this.personaldetails.email,
        carType:this.cartype,
        serviceplan:this.serviceplanchosen
      });

      
      
  }
  
  orderdata(){
    console.log(this.orderform.value);
    alert('YOUR ORDER HAS BEEN PLACED');
    this.checkoutservice.placeorder(this.orderform.value).subscribe(
      response=>console.log('success,response')
    );
    this.booking.emit<any>(this.orderform.value);
    this.trackorder();
      
}

trackorder(){
  this.router.navigate(['trackorder'])
}
}


