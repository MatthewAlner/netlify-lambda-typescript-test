import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public joke;

  constructor(private http: HttpClient) {}

  public getJoke() {
    this.http.get('/.netlify/functions/jokeTypescript').subscribe(joke => this.joke = joke);
  }
}
