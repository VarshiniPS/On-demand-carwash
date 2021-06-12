import { Component, OnInit, ViewChild } from '@angular/core';
import { MybookingsService } from '../mybookings.service';
import { WasherdetailsService } from '../washerdetails.service';
import {
  StripeElementsOptions
} from '@stripe/stripe-js';

import { Router } from '@angular/router';


@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {
  [x: string]: any;

public pays:any=[];

elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

 

 constructor(private mybooking:MybookingsService,private washieeaction:WasherdetailsService,private router:Router) { }
 
  ngOnInit(): void {
    this.mybooking.on<any>().subscribe(data=>{
      this.pays=data;
    })

  this.washieeaction.on<any>().subscribe(data=>{
    this.washdetails=data;
    console.log(data);
    if(data==="ACCEPTED"){
      alert("YOUR ORDER HAS BEEN ACCEPTED BY THE WASHER");
    }else{
      alert("YOUR ORDER HAS BEEN CONFIRMED BY THE WASHER");
    }
    
   });
  
  }
  
 

 pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Iyk3ESHHhnGOdvyTR2WBQ8MJ56c4QhbRnC3Xyz1buMArCvPp4QTtZfM2LtXLisGY54scWIjiC8cfB3dUiv9BHjt00l8XmE7SC',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('payment successful');
        this.router.navigate(['head']);
        
      }
    });
 
    handler.open({
      name: 'THE CAR SPA',
      description: 'car wash',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            console.log("Token is --> token.id"),
          this.http.post("http://localhost:3000/paynow",{
          token : token.id
          }).subscribe(
    (res)=>{
  console.log("The response from server is ",res);
  console.log('Payment Done')
            console.log(token)
            alert('Payment Success!!');
          })
        
                }
                      });
      }
       
      window.document.body.appendChild(s);
    }

    
  }




}
