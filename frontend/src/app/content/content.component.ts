import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  visibleSpinner: Boolean;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.showSpinner.subscribe(data => this.visibleSpinner = data);
  }

}
