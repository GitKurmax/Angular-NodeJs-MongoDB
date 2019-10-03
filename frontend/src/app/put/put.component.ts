import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  name = '';
  age = '';
  
  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  addPerson() {
    this.commonService.add('/add', {name: this.name, age: this.age}).subscribe(data => {
      this.commonService.getAll('/getAll');
    });
  }
}
