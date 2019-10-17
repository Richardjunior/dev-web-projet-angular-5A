import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BestMovie } from './best-movie.module';
import { BestMovieService } from './best-movie.service';

@Component({
  selector: 'app-ngbd-buttons-radio',
  templateUrl: './best-movie.component.html',
  providers: [NgbCarouselConfig]
})
export class BestMovieBasicComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  tmpBestMovie$: Array<BestMovie> = new Array<BestMovie>();
  BestMovie$: BestMovie[];
  movieId: number;

  constructor(private route: ActivatedRoute ,config: NgbCarouselConfig, private BestMovieService: BestMovieService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit() {
    this.getIdMovie();
    this.getBestMovies();
  }

getBestMovies() {
  return this.BestMovieService.getBestMovie().subscribe(data => {
    for ( let i = 0 ; i < data.results.length; i++) {
      if (data.results[i].vote_count > 2000) {
       this.tmpBestMovie$.push(data.results[i]);
      }
  }
      this.BestMovie$ = this.tmpBestMovie$;
  });
}

getIdMovie() {
  this.route.paramMap.pipe(
    map(params => {
        this.movieId = parseInt(params.get('id'), 10);
      })
  ).subscribe();
}
}
