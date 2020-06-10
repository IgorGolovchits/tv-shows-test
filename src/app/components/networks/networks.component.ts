import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent {
  networkValue = '';
  @Input() networks: string[];
  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  passNetworkValue() {
    this.change.emit(this.networkValue);
  }
  constructor() { }
}
