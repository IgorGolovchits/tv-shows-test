import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent {
  yearValue = '';
  @Input() years: string[];
  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  passYearValue() {
    this.change.emit(this.yearValue);
  }
  constructor() { }
}
