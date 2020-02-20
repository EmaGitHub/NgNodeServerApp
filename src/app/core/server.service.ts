import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

    constructor(private http: HttpClient) {}
    
    private async request(method: string, url: string, data?: any) {

        let body: HttpParams = new HttpParams();
        body = body.append('data', data);   

        const result = this.http.request(method, url, {
        body: body,
        responseType: 'json',
        observe: 'body',
        headers: {
          //Authorization: `Bearer ${token}`
        }
      });

      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }
    get() {
      return this.request('GET', environment.serverUrl+'/test');
    }
    create(data) {

      return this.request('POST', environment.serverUrl+'/add', data);
    }
   /*  updateEvent(event) {
      return this.request('PUT', `${environment.serverUrl}/test/${event.id}`, event);
    }*/

    deleteElem(id: number) {
      return this.request('DELETE', environment.serverUrl+'/delete/'+id);
    } 
}