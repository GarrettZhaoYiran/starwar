import { Component, OnInit } from '@angular/core';
//import { Starwar1Service } from '../starwar1.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  data:[];

  constructor(
    //private starwarservice1: Starwar1Service,
    private http: HttpClient,
  ) { 
  }

  
  getPeoples() {
    let api = "https://swapi.co/api/people";

    this.http.get(api).subscribe(response => {
      
      this.data = response["results"];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getPeoples();
    console.log('done here');
  }

}
