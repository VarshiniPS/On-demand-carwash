import { Component, OnInit, ViewChild } from '@angular/core';
import { MybookingsService } from '../mybookings.service';
import { WasheractionService } from '../washeraction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { StripeCardComponent, StripeService} from "ngx-stripe";
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';


import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {
  [x: string]: any;
/* @ViewChild(StripeCardComponent) card: StripeCardComponent;
 stripeTest: FormGroup;*/

public pays:any=[];
public washaction:any=[];
/*cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };*/

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  



  
  

  constructor(private mybooking:MybookingsService,private washer:WasheractionService,private razorpay:PaymentService,private fb: FormBuilder, private stripeService: StripeService,private http:HttpClient) { }
  //handler:any = null;
  ngOnInit(): void {
    this.mybooking.on<any>().subscribe(data=>{
      this.pays=data;
    })

  this.washer.on<any>().subscribe(data=>{
    this.washaction=data;
    console.log(data);
    
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
