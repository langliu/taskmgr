import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
})
export class NewTaskListComponent implements OnInit {
  public title = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<NewTaskListComponent>,) {}

  ngOnInit() {
    this.title = this.data.title;
  }

  onSave() {
    this.dialogRef.close(this.title);
  }
}
