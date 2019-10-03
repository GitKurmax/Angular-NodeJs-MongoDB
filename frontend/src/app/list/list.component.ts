import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllDialogsComponent } from '../all-dialogs/all-dialogs.component';
import { CommonService } from '../services/common.service';

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
    public dialog: MatDialog,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.users.subscribe(data => {
      if (data) {
        this.users = data.map((user, index) => {
          return {
            number: ++index,
            name: user.name,
            age: user.age,
            id: user._id
          }
        });
      }
    })

    this.commonService.getAll('/getAll');
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

    dialogRef.afterClosed().subscribe(result =>{
      console.log('result: ' + result);
      this.commonService.action.subscribe(data => {
        if (data === 'delete') {
          const newUsers = this.users.filter(user => user.id !== result.id);
          this.users = newUsers;
        }
      });
    });
  }
}

