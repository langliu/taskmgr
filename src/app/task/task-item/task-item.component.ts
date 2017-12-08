import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  /**
   * 向父组件传递任务项的点击事件
   */
  onItemClick(): void {
    this.taskClick.emit();
  }

  /**
   * 阻止CheckBox事件冒泡
   * @param {Event} event - CheckBox的事件
   */
  onCheckBoxClick(event: Event): void {
    event.stopPropagation();
  }
}
