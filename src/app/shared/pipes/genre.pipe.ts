import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '../models/tv-show';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  transform(items: TvShow[], filterValue: string): TvShow[] {
    if (!filterValue) { return items; }
    if (filterValue === 'All') { return items; }
    return items.filter(item => item.genre.includes(filterValue));
  }
}
