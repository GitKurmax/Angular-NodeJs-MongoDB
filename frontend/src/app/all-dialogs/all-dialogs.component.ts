import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-all-dialogs',
  templateUrl: './all-dialogs.component.html',
  styleUrls: ['./all-dialogs.component.scss']
})
export class AllDialogsComponent implements OnInit {
  public name = '';
  public age = '';

  constructor(
    public dialogRef: MatDialogRef<AllDialogsComponent>,
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.name = this.data.user.name;
    this.age = this.data.user.age;
  }
  
  deleteUser() {
    this.commonService.delete('/removeUser', this.data.user.id);      
    this.dialogRef.close({type: 'delete', id: this.data.user.id});
  }

  editUser() {
    console.log({name:this.name, age: this.age});
    this.commonService.edit('/editUser', 
      {
        name:this.name, 
        age: this.age,
        id: this.data.user.id
    }).subscribe(data => console.log(data));
    this.dialogRef.close('edit');
  }

  cancel(action) {
    this.dialogRef.close(action);
  }
  
}
