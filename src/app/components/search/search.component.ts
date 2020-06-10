import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchValue = '';
  // tslint:disable-next-line:no-output-native
  @Output() input: EventEmitter<string> = new EventEmitter<string>();

  passNetworkValue() {
    this.input.emit(this.searchValue);
  }
  constructor() { }
}
