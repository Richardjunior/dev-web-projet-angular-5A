import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BestMovie } from './best-movie.module';
import { BestMovieService } from './best-movie.service';

@Component({
  selector: 'app-ngbd-buttons-radio',
  templateUrl: './best-movie.component.html',
  providers: [NgbCarouselConfig]
})
export class BestMovieBasicComponent implements OnInit{

  showNavigationArrows = false;
  showNavigationIndicators = false;
  tmpBestMovie$: BestMovie[];
  BestMovie$: BestMovie[];
 
  constructor(config: NgbCarouselConfig, private BestMovieService: BestMovieService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit() {
    return this.BestMovieService.getBestMovie().subscribe(data => {
        this.tmpBestMovie$ = data.results;
        this.BestMovie$=this.tmpBestMovie$;
    });
    
  }
}
