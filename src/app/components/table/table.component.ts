import { HttpService } from './../../core/http/http.service';
import { Component, OnInit  } from '@angular/core';
import { TvShow } from '../../shared/models/tv-show';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [HttpService]
})
export class TableComponent implements OnInit {
  tvShows: TvShow[];
  genres: string[] = ['All'];
  networks: string[] = ['All'];
  years: string[] = ['All'];

  searchValue = '';
  genreValue = '';
  networkValue = '';
  yearValue = '';
  pageNumber = '';
  itemsOnPage: (number | string)[] = [5, 10, 25, 'All'];
  itemsToDisplay = this.itemsOnPage[0];
  currentPage = 1;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe(data => {
      this.tvShows = data['tvShows'];
      this.tvShows.forEach(item => {
        this.genres = [...this.genres, ...item.genre];
        this.networks = [...this.networks, ...item.network];
        const dataArray = item.premiere.split('.');
        this.years.push(dataArray[2]);
      });
      this.genres = [...new Set(this.genres.sort((a, b) => a.localeCompare(b)))];
      this.networks = [...new Set(this.networks.sort((a, b) => a.localeCompare(b)))];
      this.years = [...new Set(this.years.sort((a, b) => b.localeCompare(a)))];
    });
  }

  sortItems(event) {
    const columnName = event.target.textContent;
    if (columnName === 'Name') {
      this.tvShows.sort((a, b) => a.name.localeCompare(b.name));
    } else if (columnName === 'Network') {
      this.tvShows.sort((a, b) => {
        return a.network[0].localeCompare( b.network[0]);
      });
    } else if (columnName === 'Season') {
      this.tvShows.sort((a, b) => a.season - b.season);
    } else if (columnName === 'Premiere') {
      this.tvShows.sort((a, b) => {
        const firstDateArray = a.premiere.split('.');
        const secondDateArray = b.premiere.split('.');

        const firstDate = new Date(+firstDateArray[2], +firstDateArray[1] - 1, +firstDateArray[0]);
        const secondDate = new Date(+secondDateArray[2], +secondDateArray[1] - 1, +secondDateArray[0]);
        return +firstDate - +secondDate;
      });
    }
  }

  showActiveType(event) {
    this.currentPage = 1;
    const activeType = document.querySelector('.type.active');
    activeType.classList.remove('active');
    event.target.classList.add('active');
    const currentDisplayValue = event.target.textContent.trim();
    this.itemsToDisplay = currentDisplayValue === 'All' ? this.tvShows.length : currentDisplayValue;
  }

  showGenreChanges(event) {
    this.genreValue = event.target.value;
  }

  showNetworkChanges(event) {
    this.networkValue = event.target.value;
  }

  showYearChanges(event) {
    this.yearValue = event.target.value;
  }

  showSearchValue(event) {
    this.searchValue = event.target.value;
  }
}
