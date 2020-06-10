import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '../models/tv-show';

@Pipe({
  name: 'network'
})
export class NetworkPipe implements PipeTransform {

  transform(items: TvShow[], filterValue: string): TvShow[] {
    if (!filterValue) { return items; }
    if (filterValue === 'All') { return items; }
    return items.filter(item => item.network.includes(filterValue));
  }
}
