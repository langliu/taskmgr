import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { itemAnim } from '../../animations/item.animation';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim],
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  @HostBinding('@item') public widerPriority = 'out';

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

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'in';
    console.log('in');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'out';
  }
}
