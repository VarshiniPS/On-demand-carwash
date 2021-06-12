import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WasheractionService } from '../washeraction.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class custorders {
  constructor(
    public _id:String,
    public name:String,
    public email:String,
    public carType:String,
    public serviceplan:String,
    public vehiclenumber:String,
    public address:String,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:String


  )
{}
  }

@Component({
  selector: 'app-washer-order',
  templateUrl: './washer-order.component.html',
  styleUrls: ['./washer-order.component.css']
})
export class WasherOrderComponent implements OnInit {
  closeResult!: string;
  orders:custorders[]=[];
  order!:custorders;
  editForm!: FormGroup;
  selectedaction:any=[];
  
  washeract:any=[];

  constructor(private http: HttpClient,private washeraction:WasheractionService,private modalService: NgbModal,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getorders();
    this.editForm = this.fb.group({
      _id: [''],
      name: [''],
      email:[''],
      carType:[''],
      serviceplan:[''],
      vehiclenumber:[''],
      address:[''],
      requestedOn:[''],
      deliveredOn:[''],
      status:[''],
   });

  }
  getorders(){
    this.http.get<any>('http://localhost:4005/order/findOrders').subscribe(
      response=>{
        console.log(response);
        this.orders=response.orders;
        
      }
    );
    }

    open(content:any) {
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

    openEdit(targetModal: any,order:custorders){
      this.modalService.open(targetModal,{
        centered: true,
        backdrop: 'static',
        size: 'lg'
      });
      this.editForm.patchValue( {
        _id: order._id,
        name: order.name,
        email: order.email,
        carType: order.carType,
        serviceplan: order.serviceplan,
        vehiclenumber: order.vehiclenumber,
        address: order.address,
        requestedOn: order.requestedOn,
        deliveredOn: order.deliveredOn,
        status: order.status,
      });
    }
    
    onSave() {
      const editURL = 'http://localhost:4005/order/updateOrder/' + this.editForm.value._id;
      console.log(this.editForm.value);
      this.http.put(editURL, this.editForm.value)
        .subscribe((result) => {
          this.ngOnInit();
        });
          this.modalService.dismissAll();
    

  this. washeract= this.editForm.value.status;
  this.washeraction.emit<any>(this.washeract)
}

}