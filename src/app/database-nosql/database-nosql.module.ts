import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { DatabaseNoSqlPage } from './database-nosql.component';

@NgModule({
  declarations: [
    DatabaseNoSqlPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [DatabaseNoSqlPage]
})
export class DatabaseNoSqlModule { }
