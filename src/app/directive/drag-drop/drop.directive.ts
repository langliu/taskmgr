import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2
} from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {
  @Input() public dragEnterClass: string;
  @Input() public dragTags: string[] = [];
  @Output() dropped = new EventEmitter<DragData>();
  private data$;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragDropService: DragDropService
  ) {
    this.data$ = this.dragDropService.getDragData().take(1);
  }

  /**
   * 监听拖拽进入的事件
   * @param {Event} event
   */
  @HostListener('dragenter', ['$event'])
  onDragEnter(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dragTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  /**
   * 监听拖拽到元素上方的事件
   * @param {Event} event
   */
  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dragTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(event, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(event, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(event, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(event, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  /**
   * 监听拖拽离开的事件
   * @param {Event} event
   */
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dragTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  /**
   * 监听停止拖拽的事件
   * @param {Event} event
   */
  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dragTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.dragDropService.clearDragData();
        }
      });
    }
  }
}
