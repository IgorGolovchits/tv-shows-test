import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '../models/tv-show';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: TvShow[], searchValue: string): TvShow[] {
    if (!items) { return []; }
    if (!searchValue) { return items; }

    searchValue = searchValue.toLowerCase();

    return items.filter((item: TvShow) => {
      return item.name.toLowerCase().includes(searchValue);
    });
  }

}

