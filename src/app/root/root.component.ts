import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../core/http-client.service';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})

export class RootComponent implements OnInit {

  constructor(private httpClient: HttpClientService) {
  }

  ngOnInit() {
  }


}