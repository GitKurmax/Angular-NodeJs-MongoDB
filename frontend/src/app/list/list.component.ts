import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllDialogsComponent } from '../all-dialogs/all-dialogs.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public users = [];
  displayedColumns: string[] = ['position', 'name', 'age', 'edit'];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
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

  openDialog(action): void {
    const dialogRef = this.dialog.open(AllDialogsComponent, {data: {action}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

