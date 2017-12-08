import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  /**
   * 当点击邀请按钮时向父组件传递点击事件
   */
  onInviteClick(): void {
    this.onInvite.emit();
  }

  /**
   * 当点击编辑按钮时向父组件传递点击事件
   */
  onEditClick(): void {
    this.onEdit.emit();
  }

  /**
   * 当点击删除按钮时向父组件传递点击事件
   */
  onDeleteClick(): void {
    this.onDelete.emit();
  }
}
