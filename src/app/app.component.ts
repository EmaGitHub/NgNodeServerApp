import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
        
        bottom: '0'
      })),
      transition('false => true', animate('400ms')),
      transition('true => false', animate('800ms'))
    ]),
  ]
})
export class AppComponent {

  title = 'Angular Server App';
  showLoginForm = 'false';
  
  name: string= '';
  password: string= '';

  showHideLoginForm(){

    this.showLoginForm == 'false' ? this.showLoginForm = 'true' : this.showLoginForm = 'false';
  }

  submit(){

    console.log("Submit ",this.name," - ",this.password)
  }
}
