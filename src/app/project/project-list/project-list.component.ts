import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

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

  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent);
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }
}
