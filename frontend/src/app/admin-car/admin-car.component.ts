import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';

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
  car!:Car;
  editForm !: FormGroup;
  deleteId ! : String;

  constructor(private httpClient: HttpClient,private modalService: NgbModal,
    private fb:FormBuilder) { }


  ngOnInit(): void {
    this.getCar();
    this.editForm = this.fb.group({
      _id: [''],
      name: ['']
   });
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
      console.log(f.value);
      const url = 'http://localhost:4000/admin/car-func/addCar';
      this.httpClient.post(url, f.value)
        .subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
      this.modalService.dismissAll(); //dismiss the modal
    }

    openEdit(targetModal: any,car:Car){
      this.modalService.open(targetModal,{
        centered: true,
        backdrop: 'static',
        size: 'lg'
      });
      this.editForm.patchValue( {
        _id: car._id, 
        name: car.name,
      });
    }
    onSave() {
      const editURL = 'http://localhost:4000/admin/car-func/updateCar/'+ this.editForm.value._id;
      console.log(this.editForm.value);
      this.httpClient.put(editURL, this.editForm.value)
        .subscribe((result) => {
          this.ngOnInit();
        });
          this.modalService.dismissAll();

    }

    openDelete(targetModal:any, car: Car) {
       this.deleteId = car._id;
      this.modalService.open(targetModal, {
        backdrop: 'static',
        size: 'lg'
      });
    }

    onDelete() {
      const deleteURL = 'http://localhost:4000/admin/car-func/deleteCar/' + this.deleteId;
      this.httpClient.delete(deleteURL)
        .subscribe((result) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }

}
