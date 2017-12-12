import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface DragData {
  data: any;
  tag: string;
}

@Injectable()
export class DragDropService {
  private _dragData = new BehaviorSubject<DragData>(null);

  constructor() {}

  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  clearDragData() {
    this._dragData.next(null);
  }
}
