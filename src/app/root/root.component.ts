import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../core/http-client.service';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})

export class RootComponent implements OnInit {

  response: any;
  error: string;

  films: { name: string, vote: string }[] = new Array();

  indices: any;

  constructor(private httpClient: HttpClientService) {
  }

  ngOnInit() {
  }

  getData() {

    this.httpClient.getFilms().subscribe((resp: any) => {

      const str = resp;
      const firstIndex = str.indexOf('"showtimes__movie"');
      const secondIndex = this.getPosition(str, '"showtimes__movie"', 2);
      const sub = String(str).substring(firstIndex, secondIndex)

      this.indices = this.getIndicesOf('class="movie-name"', sub);

      for (let i = 0; i < this.indices.length; i++) {

        const sottos = sub.substring(this.indices[i] + 22, this.indices[i] + 150);


        const start = sottos.indexOf(">");
        const end = sottos.indexOf("<");
        let name: string = this.decodeHtml(sottos.substring(start + 1, end));
        this.films.push({ name: "" + name, vote: "" });
      }

      for (let i = 0; i < this.indices.length; i++) {

        this.httpClient.getFilmIdTitle(this.films[i].name).subscribe((resp) => {

          var id = (resp.results[0].id as string).substring(7, (resp.results[0].id as string).length - 1)
          this.films[i].vote = id;
        },
          (err: any) => {

            this.error = err.statusText + " IMDB";
          })
      }
    },
      (error: any) => {

        this.error = error.statusText + " IMDB";
      })
  }

  getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  getIndicesOf(searchStr, str, caseSensitive = false) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }

  decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  refresh() {

  }

  omdb() {

    for (let i = 0; i < this.indices.length; i++) {

      this.httpClient.getRatingFromName(this.films[i].name).subscribe((resp) => {

        this.films[i].vote = resp.Ratings[0].Value;
      },
        (err: any) => {

          this.error = JSON.stringify(err) + " OMDB ERROR";
        })
    }
  }

}