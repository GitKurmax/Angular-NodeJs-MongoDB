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
    this.commonService.getAll('/getAll')
      .subscribe(users => this.users = users.map((user, index) => {
        return {
          number: ++index,
          name: user.name,
          age: user.age,
          id: user._id
        }
      } 
      ));
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
      console.log(result);
      // const newUsers = this.users.filter(user => {
      //   return user.id !== elem.id
      // });
      //   this.users = newUsers;
      });
    }
  }

