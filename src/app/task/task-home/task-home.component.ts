import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../animations/router.animation';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') public state;
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
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task): void {
    this.dialog.open(NewTaskComponent, {
      data: {title: '修改任务', task: task}
    });
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {title: '删除任务列表：', content: '您确认删除该任务列表吗？'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditDialogDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {title: '更改列表名称：'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {title: '新建列表：'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
