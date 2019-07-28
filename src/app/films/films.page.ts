import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  data:[];

  constructor(
    //private starwarservice1: Starwar1Service,
    private http: HttpClient,
  ) { 
  }

  getFilms() {
    let api = "https://swapi.co/api/films/";

    this.http.get(api).subscribe(response => {
      
      this.data = response["results"];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getFilms();
    console.log('done here');
  }

}
