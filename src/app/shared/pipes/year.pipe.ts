import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '../models/tv-show';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {
  transform(items: TvShow[], filterValue: string): TvShow[] {
    if (!filterValue) { return items; }
    if (filterValue === 'All') { return items; }
    return items.filter(item => item.premiere.includes(filterValue));
  }
}
