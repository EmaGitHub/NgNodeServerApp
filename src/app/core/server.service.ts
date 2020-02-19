import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
    constructor(private http: HttpClient) {

        console.log(" ",environment.serverUrl)
    }
    private async request(method: string, url: string, data?: any) {

        const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        /* headers: {
          Authorization: `Bearer ${token}`
        } */
      });
      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }
    get() {
      return this.request('GET', environment.serverUrl+'/test');
    }
    create(data) {
      return this.request('POST', environment.serverUrl+'/test', data);
    }
   /*  updateEvent(event) {
      return this.request('PUT', `${environment.serverUrl}/test/${event.id}`, event);
    }
    deleteEvent(event) {
      return this.request('DELETE', `${environment.serverUrl}/test/${event.id}`);
    } */
}