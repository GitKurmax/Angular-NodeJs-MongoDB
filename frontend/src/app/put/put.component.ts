import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  addPerson() {
    this.http.get<any>('http://localhost:3000/add')
      .subscribe(data => data);
  }
}
