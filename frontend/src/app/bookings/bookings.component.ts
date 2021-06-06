import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MybookingsService } from '../mybookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  order:any='';
  constructor(private http: HttpClient,private booking:MybookingsService) { }

  ngOnInit(): void {
    this.booking.on<any>().subscribe(data=>{
      this.order=data;
    })
}

}
  


