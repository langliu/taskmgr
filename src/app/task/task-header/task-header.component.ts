import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() deleteList = new EventEmitter<void>();
  @Output() editList = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  /**
   * 向父组件传递“新建任务”的点击事件
   */
  onNewTaskClick() {
    this.newTask.emit();
  }

  /**
   * 向父组件传递“移动本列表所有内容”的点击事件
   */
  onMoveAllClick() {
    this.moveAll.emit();
  }

  /**
   * 向父组件传递“删除列表”的点击事件
   */
  onDeleteListClick() {
    this.deleteList.emit();
  }

  /**
   * 向父组件传递“修改列表名称”的点击事件
   */
  onEditListClick() {
    this.editList.emit();
  }
}
