import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

export class Car{
  constructor(
    public _id : String,
    public name: String
  ){

  }
}

@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.css']
})
export class AdminCarComponent implements OnInit {
  closeResult!: string;
  cars:Car[]=[];

  constructor(private httpClient: HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCar();
  }
  getCar(){
    this.httpClient.get<any>('http://localhost:4000/admin/car-func/findAllCars').subscribe(
      response=>{
        console.log(response);
       this.cars=response;
        
      }
    );
    }

   /* addcar(){
      let httpHeaders=new HttpHeaders({});

//custom headers
       httpHeaders.get('')
      httpHeaders=httpHeaders.set('x-access-token','');
      
     

      this.httpClient.post<any>('http://localhosr:4000/admin/addCar',{headers:httpHeaders}).subscribe(
        response=>{

        }
      )
    }*/
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    onSubmit(f: NgForm) {
      const url = 'http://localhost:4003/admin/car-func/addCar';
      this.httpClient.post(url, f.value)
        .subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
      this.modalService.dismissAll(); //dismiss the modal
    }

}
