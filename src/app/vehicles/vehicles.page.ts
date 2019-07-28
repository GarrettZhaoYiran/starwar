import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  data:[];

  constructor(
    //private starwarservice1: Starwar1Service,
    private http: HttpClient,
  ) { 
  }

  getvehicles() {
    let api = "https://swapi.co/api/vehicles/";

    this.http.get(api).subscribe(response => {
      
      this.data = response["results"];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getvehicles();
    console.log('done here');
  }

}