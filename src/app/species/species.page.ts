import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {
  data:[];

  constructor(
    //private starwarservice1: Starwar1Service,
    private http: HttpClient,
  ) { 
  }

  getPlanets() {
    let api = "https://swapi.co/api/species/";

    this.http.get(api).subscribe(response => {
      
      this.data = response["results"];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getPlanets();
    console.log('done here');
  }

}
