import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpacePipe } from './shared/pipes/space.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { GenrePipe } from './shared/pipes/genre.pipe';
import { NetworkPipe } from './shared/pipes/network.pipe';
import { YearPipe } from './shared/pipes/year.pipe';
import { TableComponent } from './components/table/table.component';
import { GenresComponent } from './components/genres/genres.component';
import { NetworksComponent } from './components/networks/networks.component';
import { YearsComponent } from './components/years/years.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacePipe,
    SearchPipe,
    GenrePipe,
    NetworkPipe,
    YearPipe,
    TableComponent,
    GenresComponent,
    NetworksComponent,
    YearsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
