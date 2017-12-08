import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  public title = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data) {}

  ngOnInit() {
    this.title = this.data.title;
  }
}
