import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person = 'noname';
  title = 'frontend';

  constructor(
    private http: HttpClient) { }

  addPerson() {
    this.http.get<any>('http://localhost:3000/add')
      .subscribe(data => this.person = data.name);
  }
}
