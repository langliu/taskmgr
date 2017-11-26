import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items = [{ title: '项目', object: '项目首页' }];

  constructor() {}

  ngOnInit() {}
}
