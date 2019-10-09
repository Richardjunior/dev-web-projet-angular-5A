import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending/trending.service';
import { Trending } from '../trending/trending.model';
@Component({
  templateUrl: 'genre.component.html'
})
export class GenresComponent implements OnInit {
  trendings$: Trending[];
  tabAction$: Trending[];
  tabThriller$: Trending[];
  tabHorror$: Trending[];
  tabAdventure$: Trending[];


  constructor( private trendingService: TrendingService) {}

  ngOnInit() {
    this.getTrending();
  }

  getTrending() {
    this.tabAction$ = new Array <Trending>();
    this.tabThriller$ = new Array <Trending>();
    this.tabHorror$ = new Array <Trending>();
    this.tabAdventure$ = new Array <Trending>();


    return this.trendingService.getTrendings().subscribe(data => {
      this.trendings$ = data.results;
      for ( let i = 0 ; i < this.trendings$.length; i++ ) {
        for(let j = 0 ; j < this.trendings$[i].genre_ids.length ; j++) {
          console.log(this.trendings$[i]);
          if (this.trendings$[i].genre_ids[j] === 28) {
            this.tabAction$.push(this.trendings$[i]); 
          }
          if (this.trendings$[i].genre_ids[j] === 53) {
            this.tabThriller$.push(this.trendings$[i]); 
          }
          if (this.trendings$[i].genre_ids[j] === 12) {
            this.tabAdventure$.push(this.trendings$[i]); 
          }
          if (this.trendings$[i].genre_ids[j] === 27) {
            this.tabHorror$.push(this.trendings$[i]); 
          }
        }
      }
    });
  }
}
