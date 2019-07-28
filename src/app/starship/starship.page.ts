import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.page.html',
  styleUrls: ['./starship.page.scss'],
})
export class StarshipPage implements OnInit {
  data:[];

  constructor(
    //private starwarservice1: Starwar1Service,
    private http: HttpClient,
  ) { 
  }

  getStarship() {
    let api = "https://swapi.co/api/starships/";

    this.http.get(api).subscribe(response => {
      
      this.data = response["results"];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getStarship();
    console.log('done here');
  }

}
