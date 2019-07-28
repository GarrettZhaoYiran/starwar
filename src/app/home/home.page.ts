import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Starwar1Service } from '../starwar1.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private service: Starwar1Service,
  ) {}

  navigate_characters(){
    this.router.navigate(['/characters'])
  }
  navigate_Films(){
    this.router.navigate(['/films'])
  }
  navigate_Species(){
    this.router.navigate(['/species'])
  }
  navigate_Starship(){
    this.router.navigate(['/starship'])
  }
  navigate_Vehicles(){
    this.router.navigate(['/vehicles'])
  }
  navigate_Planets(){
    this.router.navigate(['/planets'])
  }

  
}

