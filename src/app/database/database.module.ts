import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { DatabasePage } from './databse.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    DatabasePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [DatabasePage]
})
export class DatabaseModule { }
