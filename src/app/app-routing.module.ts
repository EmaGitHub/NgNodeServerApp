import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'root', 
    component: RootComponent 
  },
  { path: 'login', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
