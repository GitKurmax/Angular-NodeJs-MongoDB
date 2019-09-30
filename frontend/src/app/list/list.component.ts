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

    
  openDialog(action, elem): void {
    const dialogRef = this.dialog.open(AllDialogsComponent, 
      {
        data: {
          action: action,
          user: elem,
          users: this.users
          }
      });

    dialogRef.afterClosed().subscribe(result => {
      const newUsers = this.users.filter(user => {
        return user.id !== elem.id
    });
    this.users = newUsers;
});
  }
}

