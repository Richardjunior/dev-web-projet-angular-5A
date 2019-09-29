import { Component, OnInit  } from '@angular/core';
import { TrendingService } from './trending.service';
import { FormControl, Validators } from '@angular/forms';
import { Trending } from './trending.model';
@Component({
  selector: 'app-starter',
  templateUrl: './trending.component.html',
})
export class TrendingComponent implements OnInit {
  subtitle: string;
  trendings$: Trending[];
  trendingByGenres$: Trending[];
  trendingActions$: Trending[];
  constructor( private trendingService: TrendingService) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit() {
    return this.trendingService.getTrendings().subscribe(data => {
        this.trendings$ = data.results;
    });
  }

  sortByGenre() {
    this.trendingByGenres$ = this.trendings$;
  }



}


