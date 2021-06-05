import { Component, OnInit } from '@angular/core';
//import { FormGroup,FormBuilder,Validators} from '@angular/forms';

//import { DataService } from '../services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
/*elements:Elements;
card:StripeElement;
paymentStatus:any;
stripeData:any;
submitted:any;
loading:any;

elementsOptions:ElementsOptions={
  locale:'en'
};

stripeForm:FormGroup;*/

  constructor(
    //private fb:FormBuilder,private stripeService:StripeService
    ) { }

  ngOnInit(){
    /*this.loading=false;
    this.createForm();
    this.stripeService.elements(this.elementsOptions).subscribe(elements=>{
      this.elements=elements;
      if(!this.card){
        this.card=this.elements.create('card',{
          iconStyle:'solid',
          style:{
            base:{
              iconColor:'#666EE8',
              color:'#31325F',
              lineHeight:'40px',
              fontWeight:300,
              fontFamily:'"Helvetica Neue",Helvetica,sans-serif',
              fontSize:'18px',
              '::placeholder':{
                color:'#CFD7E0'
              }
            }
          },
        });
        this.card.mount('#card-element');
      }
    });
  }

  createForm(){
    this.stripeForm=this.fb.group({
      name:['',[Validators.required]],
      amount:['',[Validators.required]]
    });
  }
  buy(){
    this.submitted=true;
    this.loading=true;
    this.stripeData=this.stripeForm.value
    this.stripeService
        //.createToken(this.card, { name })
        .subscribe(result=>{
          if(result.token){
            this.stripeData['token']=result.token
            //this.dataService.stripePayment(this.stripeData).subscribe((res)=>{
              if(res['sucess']){
                this.loading=false;
                this.submitted=false;
                this.paymentStatus=res['status'];
              }
            })
          }else if (result.error){
              this.paymentStatus=result.error.message
              
          }
          
        });
  }*/

}
}
