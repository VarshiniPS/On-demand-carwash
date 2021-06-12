import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';
import { WasherdetailsService } from '../washerdetails.service';

@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  formGroup:FormGroup;
  washerdetails:any=[];
  constructor(private authService:AuthServiceService,private router:Router,private washer:WasherdetailsService) { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }
  adminlogin(){
    if(this.formGroup.valid){
      this.authService.adminlogin(this.formGroup.value).subscribe(result=>{
        if(result.role=="ADMIN"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['adash']);
          }else if(result.role=="WASHER"){
          console.log(result);
            this.washerdetails=result;
            this.washer.emit<any>(this.washerdetails);
          alert(result.message);
          this.router.navigate(['washer']);
          }else{
            alert(result.message);
          }
      });
    }
  }

/*  washerlogin(){
    if(this.formGroup.valid){
      this.authService.washerlogin(this.formGroup.value).subscribe(result=>{
        if(result.role=="WASHER"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['washer']);
          }else{
            alert(result.message);
          }
      });
    }
  }*/
}
