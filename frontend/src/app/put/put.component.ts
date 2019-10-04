import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  public name: string = '';
  public age: string = '';
  public dis = true;
  
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  addPerson() {
    this.commonService.displaySpinner();
    this.commonService.add('/add', {name: this.name, age: this.age})
      .subscribe(data => {
        this.name = '';
        this.age = '';
        this.set();
        this.commonService.getAll('/getAll');
    });
  }

  set() {
    this.dis = this.name.length === 0 || this.age.length === 0;
  }
}
