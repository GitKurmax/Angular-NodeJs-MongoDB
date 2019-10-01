import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-all-dialogs',
  templateUrl: './all-dialogs.component.html',
  styleUrls: ['./all-dialogs.component.scss']
})
export class AllDialogsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AllDialogsComponent>,
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  deleteUser() {
    this.commonService.delete('/removeUser', this.data.user.id).subscribe(data => console.log(data));
  }

  cancel() {
    this.dialogRef.close();
  }
  
}
