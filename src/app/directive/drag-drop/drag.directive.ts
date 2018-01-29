import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  // @Input() public dragClass: string;
  @Input() public dragTag: string;
  @Input() public dragData: any;
  @Input() public draggedClass: string;
  private _isDraggble = false;

  get isDraggble(): boolean {
    return this._isDraggble;
  }

  @Input('appDrag')
  set isDraggble(value: boolean) {
    this._isDraggble = value;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${value}`);
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragDropService: DragDropService,
  ) {}

  /**
   * 监听拖拽开始的事件
   * @param {Event} event
   */
  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.dragDropService.setDragData({
        tag: this.dragTag,
        data: this.dragData,
      });
    }
  }

  /**
   * 监听拖拽结束的事件
   * @param {Event} event
   */
  @HostListener('dragend', ['$event'])
  onDragEnd(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
