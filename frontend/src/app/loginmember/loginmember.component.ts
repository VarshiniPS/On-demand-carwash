import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceOrderService} from '../place-order.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private memberService:PlaceOrderService,private router:Router) { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }
  memberlogin(){
    if(this.formGroup.valid){
      this.memberService.login(this.formGroup.value).subscribe(result=>{
        if(result.role=="ADMIN"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['adash']);
          }else{
            alert(result.message);
          }
      });
    }
  }

  gotoadash(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

}
