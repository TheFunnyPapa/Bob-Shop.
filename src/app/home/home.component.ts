import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = "Bob Shop.";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  click(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}


@Injectable()
export class HomeComponentGuard implements CanActivate {  
  constructor(private router: Router) {} 

  canActivate() {
    let loggedIn = localStorage.getItem('loggedIn');
    if(loggedIn == 'yes')
      return true;

    this.router.navigate(['/login']);
    return false;
  }
}

