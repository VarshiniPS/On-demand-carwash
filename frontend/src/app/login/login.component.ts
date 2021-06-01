import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private authservice:AuthServiceService,private router:Router) {}

  ngOnInit(){
    this.initForm();
  }
initForm(){
  this.formGroup=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
}
  
loginProcess(){
  if(this.formGroup.valid){
    this.authservice.login(this.formGroup.value).subscribe(result=>{
      if(result.role=="CUSTOMER"){
        console.log(result);
        alert(result.message);
        this.router.navigate(['carbrand']);
        }else{
          alert(result.message);
        }
    });
  }
}

gotomember(pageName:string):void{
  this.router.navigate([`${pageName}`])
}


}









