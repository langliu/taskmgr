import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input() title = '选择';
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() useSvgIcon = false;
  @Input() itemWidth = '80px';
  public selected: string;
  private propagateChange = (_: any) => {};

  constructor() {}

  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onChange(index: number) {
    this.selected = this.items[index];
    this.propagateChange(this.selected);
  }
  validate(c: FormControl): { [key: string]: any } {
    return this.selected ? null : { imageListInvalid: { valid: false } };
  }
}
