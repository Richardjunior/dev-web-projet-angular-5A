import { Component, OnInit } from '@angular/core';
import { Trending  } from './trending.model';
import { TrendingService } from './trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending$: Trending[];

  constructor( private trendingService: TrendingService) { }

  ngOnInit() {
    return this.trendingService.getTrending().subscribe(data =>{
      this.trending$ = data.results;
    });
  }

}
