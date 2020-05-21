import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root.component';
import { BaseComponent } from './tabs/base/base.component';
import { ServersComponent } from './tabs/servers/servers.component';
import { UsersComponent } from './tabs/users/users.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RootComponent,
    BaseComponent,
    ServersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
