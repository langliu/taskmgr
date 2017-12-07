import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  public lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: true,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
          priority: 1
        },
        {
          id: 2,
          desc: '任务二：去完成黑板报',
          completed: false,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date(2017, 9, 23),
          priority: 2
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: false,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          priority: 3
        },
        {
          id: 2,
          desc: '任务二：去完成黑板报',
          completed: false,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          priority: 1
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }
}
