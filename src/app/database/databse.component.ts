import { Component, OnInit } from '@angular/core';
import { ServerService } from '../core/server.service';

@Component({
  selector: 'page-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
  animations: [  ]
})
export class DatabasePage implements OnInit{

  connected: boolean = false;

  wrongIdVisible: boolean = false;
  tableVisible: boolean = false;
  databaseData: any;

  name: string = '';
  id: number;

  constructor(private serverService: ServerService) {} 

  ngOnInit(){

    this.serverService.get().then((data: any) => {
      this.databaseData = data;
      this.connected = true;
    });
  }

  showRefreshData(){

    if(this.tableVisible == false) this.tableVisible = true;
    if(!this.connected) this.databaseData = [{id: 1, name: "Sample data"}, {id: 2, name: "Sample data 2"}];
    else this.serverService.get().then((data: any) => {
      this.databaseData = data;
    });
  }

  add(){

    if(this.name != ''){
      this.serverService.create(this.name).then(() => {
      });
    }
  }

  delete(){

      this.serverService.deleteElem(this.id).then(() => {
      },
      (err) => {
        this.wrongIdVisible = true;
      });
  }

  closeAlert(){

    this.wrongIdVisible = false;
  }
}
