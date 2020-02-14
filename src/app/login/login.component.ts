import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('displayLoginForm', [
      state('false', style({
        
        opacity: 0
      })),
      state('true', style({
        
        opacity: 1
      })),
      transition('false => true', animate('800ms')),
      transition('true => false', animate('400ms'))
    ]),
    trigger('terminalPosition', [
      state('false', style({
        
        bottom: '250px'
      })),
      state('true', style({
        
        bottom: '60px'
      })),
      transition('false => true', animate('400ms')),
      transition('true => false', animate('800ms'))
    ]),
  ]
})
export class LoginComponent {

  title = 'Angular Server App';
  showLoginForm = 'false';
  
  name: string= '';
  password: string= '';

  logoutFailedVisible: boolean = false;

  constructor(private router: Router){
  }

  showHideLoginForm(){

    this.showLoginForm == 'false' ? this.showLoginForm = 'true' : this.showLoginForm = 'false';
  }

  closeAlert(){

    this.logoutFailedVisible = false;
  }

  submit(){

    if(this.name != "" && this.password != "") this.router.navigate(['/root', {}]);
    else this.logoutFailedVisible = true;
  }
}
