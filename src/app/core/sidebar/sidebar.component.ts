import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter();
  items = [{ title: '项目', icon: 'projects', sub: '查看您的所有项目' }];
  calender = [
    { title: '月视图', icon: 'month', sub: '按月查看您的所有项目' },
    { title: '周视图', icon: 'week', sub: '按周查看您的所有项目' },
    {
      title: '日视图',
      icon: `day${new Date().getDate()}`,
      sub: '按天查看您的所有项目'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.closeSidebar.emit();
  }
}
