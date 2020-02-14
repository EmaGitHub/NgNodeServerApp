import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm-component',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
  })

export class ConfirmComponent {

  @Input() text: string = '';

  @Input() visible: boolean = false;
  
  @Output() closeConfirm: EventEmitter<any> = new EventEmitter();
  @Output() confirmChoice: EventEmitter<any> = new EventEmitter();

  deny(){

    this.closeConfirm.emit();
  }

  accept(){

    this.confirmChoice.emit();
    this.closeConfirm.emit();
  }
}