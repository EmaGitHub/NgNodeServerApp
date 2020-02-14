import { Component, Input, SimpleChange, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
  })

export class AlertComponent {

    @Input() text: string = '';

    @Input() visible: boolean = false;
    
    @Output() closeAlert: EventEmitter<any> = new EventEmitter();

    close(){

      this.closeAlert.emit();
    }

}