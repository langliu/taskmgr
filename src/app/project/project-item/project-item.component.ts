import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
import { cardAnim } from '../../animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim],
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

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
