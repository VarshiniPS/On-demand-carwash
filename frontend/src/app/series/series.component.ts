import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

postdata={
  brand:'AUDI'
}
  constructor(private http:HttpClient) { 
    this.http.post('http://localhost:4000/admin/car-func/findByBrand',this.postdata).toPromise().then(data=>{
      console.log(data);
      
    });
  }

  ngOnInit(): void {
  }

}
