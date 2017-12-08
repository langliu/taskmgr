import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public projects: any[] = [
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/images/covers/0.jpg'
    },
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/images/covers/1.jpg'
    },
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/images/covers/2.jpg'
    },
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/images/covers/2.jpg'
    },
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/images/covers/2.jpg'
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  /**
   * 打开一个弹窗新增项目
   */
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {title: '新增项目：'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  /**
   * 打开一个弹窗编辑项目
   */
  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: '编辑项目：'}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {title: '删除项目：', content: '您确认删除该项目吗？'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
