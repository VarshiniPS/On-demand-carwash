import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';
import  { PersonaldetailService } from '../personaldetail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private authservice:AuthServiceService,private router:Router,private personaldetail:PersonaldetailService) {}

  ngOnInit(){
    this.initForm();
  }
initForm(){
  this.formGroup=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required])
  });
}
  
loginProcess(){
  if(this.formGroup.valid){
    this.authservice.login(this.formGroup.value).subscribe(result=>{
      if(result.role=="CUSTOMER"){
        console.log(result);
        alert(result.message);
        this.router.navigate(['head']);
        }else{
          alert(result.message);
        }
    });
  }
  this.personaldetail.emit<any>(this.formGroup.value);
}

/*gotomember(pageName:string):void{
  this.router.navigate([`${pageName}`])
}*/


}









