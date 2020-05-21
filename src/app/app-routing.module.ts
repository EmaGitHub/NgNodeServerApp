import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { DatabasePage } from './database/databse.component';
import { DatabaseNoSqlPage } from './database-nosql/database-nosql.component';
import { ServersComponent } from './root/tabs/servers/servers.component';
import { UsersComponent } from './root/tabs/users/users.component';
import { BaseComponent } from './root/tabs/base/base.component';


const routes: Routes = [
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'root', 
    component: RootComponent,
    children: [
      { path: '', component: BaseComponent },
      { path: 'servers', component: ServersComponent },
      { path: 'users', component: UsersComponent}
    ]
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
