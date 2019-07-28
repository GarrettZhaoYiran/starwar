import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { SwapiService } from './ng2-swapi';

const api = 'https://swapi.co/api/';

@Injectable({
  providedIn: 'root'
})

export class Starwar1Service {

  //data:[]

  constructor(
    private http: HttpClient,
  ) {}

//  getPeoples() {
//    let api = "https://swapi.co/api/people";

//     this.http.get(api).subscribe(response => {
      
//     this.data = response["results"];
//      console.log(this.data);
//     });

    
//   }
}