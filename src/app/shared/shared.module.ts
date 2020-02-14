
import { NgModule } from '@angular/core';
import { ConfirmComponent } from './confirm/confirm.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    AlertComponent
  ],
  imports: [

  ],
  providers: [],
  bootstrap: [ConfirmComponent],
  exports: [
      ConfirmComponent,
      AlertComponent
  ]
})
export class SharedModule { }
