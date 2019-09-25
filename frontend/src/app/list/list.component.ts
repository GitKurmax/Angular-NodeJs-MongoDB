import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public users = [];
  displayedColumns: string[] = ['position', 'name', 'age', 'edit'];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/getAll')
      .subscribe(data => {
        this.users = data.map((user, index) => {
          return {
            id: user._id,
            number: ++index,
            name: user.name,
            age: user.age
          }
        });
      });
    }

    removeUser(elem) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      this.http.post<any>('http://localhost:3000/removeUser', elem, {headers: headers})
        .subscribe(data => {
          const newUsers = this.users.filter(user => {
            return user.id !== elem.id
        });
        this.users = newUsers;
    });
  }
}

