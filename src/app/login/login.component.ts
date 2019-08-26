import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  public userName: string = "";
  public password: string = "";
  public msg: string = null;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  click() {
    if(this.userName == 'gabriel' && this.password == '1234'){
      this.msg = null;
      this.router.navigate(['/home']);
      localStorage.setItem('loggedIn', 'yes');
    }
    else
      this.msg = 'Invalid Username or Password';
  }

}

@Injectable()
export class LoginComponentGuard implements CanActivate {  
  constructor(private router: Router) {} 

  canActivate() {

    let loggedIn = localStorage.getItem('loggedIn');
    if(loggedIn == 'yes'){
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
