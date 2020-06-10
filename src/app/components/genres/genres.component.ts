import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genreValue = '';
  @Input() genres: string[];
  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  passGenreValue() {
    this.change.emit(this.genreValue);
  }
  constructor() { }
}
