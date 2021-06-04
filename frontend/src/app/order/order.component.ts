import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { ServiceplanService} from '../serviceplan.service';
import { PersonaldetailService } from '../personaldetail.service';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public formGroup:FormGroup;
public cartype=''; 
public serviceplanchosen='';
public personaldetails:any='';
orderform:FormGroup;
/*orderform=new FormGroup({
  name:new FormControl([this.personaldetails]),
  email:new FormControl('')
})
*/
/*userdata={
  name:this.personaldetails.name,
  emailid:this.personaldetails.email,
  cartype:this.cartype,
  serviceplan:this.serviceplanchosen
}*/
constructor(private orderservice: OrderService,private serviceplan:ServiceplanService,private personaldetail:PersonaldetailService,private formbuilder:FormBuilder ) {
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
        //this.serviceplan=data;
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
      })
      
  }
  
  orderdata(){
    console.log(this.orderform);
    console.log(this.orderform.value);
    alert('order placed successfully');
}
}
