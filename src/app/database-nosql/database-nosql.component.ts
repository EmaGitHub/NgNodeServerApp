import { Component, OnInit } from '@angular/core';
import { ServerService } from '../core/server.service';

@Component({
  selector: 'page-database-nosql',
  templateUrl: './database-nosql.component.html',
  styleUrls: ['./database-nosql.component.scss'],
  animations: [  ]
})
export class DatabaseNoSqlPage implements OnInit{

  connected: boolean = false;

  wrongIdVisible: boolean = false;
  tableVisible: boolean = false;
  databaseData: any;

  name: string = '';
  id: number;

  constructor(private serverService: ServerService) {} 

  ngOnInit(){

    this.serverService.getCollection().then((data: any) => {
      this.databaseData = data;
      this.connected = true;
    });
  }

  showRefreshData(){

    if(this.tableVisible == false) this.tableVisible = true;
    if(!this.connected) this.databaseData = [{ "id" : 1, "name" : "first record" }, { "id" : 2, "name" : "second record" }, { "id" : 3, "name" : "third record" }];
    else this.serverService.get().then((data: any) => {
      this.databaseData = data;
    });
  }

  add(){

    if(this.name != ''){
      //this.serverService.create(this.name).then(() => {});
    }
  }

  delete(){

      /* this.serverService.deleteElem(this.id).then(() => {
      },
      (err) => {
        this.wrongIdVisible = true;
      }); */
  }

  closeAlert(){

    this.wrongIdVisible = false;
  }
}
