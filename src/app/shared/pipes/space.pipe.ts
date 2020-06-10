import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '../models/tv-show';

@Pipe({
  name: 'space'
})
export class SpacePipe implements PipeTransform {
  transform(items: TvShow[]): string | TvShow[] {
    if (!items) { return []; }
    return items.length > 1 ? items.join(', ') : items;
  }
}
