import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-all-dialogs',
  templateUrl: './all-dialogs.component.html',
  styleUrls: ['./all-dialogs.component.scss']
})
export class AllDialogsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AllDialogsComponent>,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  deleteUser() {
    this.httpService.httpDelete('delete', this.data.user.id)
    .subscribe(data => console.log(data));
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
  
}
