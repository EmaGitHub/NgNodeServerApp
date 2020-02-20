import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { DatabasePage } from './database/databse.component';
import { DatabaseNoSqlPage } from './database-nosql/database-nosql.component';


const routes: Routes = [
  { path: 'root', 
    component: RootComponent 
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'database', 
    component: DatabasePage 
  },
  { path: 'databaseNoSql', 
    component: DatabaseNoSqlPage 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
