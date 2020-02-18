import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<any>{

    return this.http.get("https://www.ucicinemas.it/cinema/toscana/firenze/uci-cinemas-firenze/", { responseType:'text'});
  }

  request(url: any, opt: any): Observable<any>{

    return this.http.get(url, opt);
  }

  getFilmIdTitle(name: string): Observable<any>{

    let convertedString = encodeURIComponent(name.trim())

    return this.http.get("https://imdb8.p.rapidapi.com/title/find?q="+convertedString, {
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "7c1f66f2c8msh30d34fa5a89abc4p1234adjsnd5dcac7cae87"
      }
    })
  }

  getRatingFromId(id: string): Observable<any>{

    return this.request("https://imdb8.p.rapidapi.com/title/get-ratings?tconst="+id, {
        "headers": {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": "7c1f66f2c8msh30d34fa5a89abc4p1234adjsnd5dcac7cae87"
        }
      })
  }

  getRatingFromName(name: string): Observable<any>{

    let convertedString = name.replace(/ /g,"+");
    let year = 2020;

    return this.http.get("http://www.omdbapi.com/?apikey=b56b93b7&t="+convertedString+"&y="+year, {
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "7c1f66f2c8msh30d34fa5a89abc4p1234adjsnd5dcac7cae87"
      }
    })
  }

}
