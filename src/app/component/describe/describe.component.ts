import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DescribeService } from './describe.service';
import { map } from 'rxjs/operators';
import { Describe, Movie } from './describe.model';

@Component({
  selector: 'app-ngbd-tabs',
  templateUrl: './describe.component.html'
})
export class DescribeComponent implements OnInit {
  currentJustify = 'start';
  movieId: number;
  describeMovie$: Describe;
  MovieVideo$: Movie[];
  keyMovie: string;
  id: number;
  youtubeUrl: string;
  constructor(private route: ActivatedRoute , private describeService: DescribeService) {}

  currentOrientation = 'horizontal';
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => {
          this.movieId = parseInt(params.get('id'), 10);
        })
    ).subscribe();
        this.describeService.getDescribeMovie(this.movieId).subscribe(
          data => {
              this.describeMovie$ =  data;
          }
        );
   }

   youtubebMovie() {
    this.describeService.getVideoOfMovie(this.movieId).subscribe(
      data => {
          this.MovieVideo$ =  data.results;
          this.keyMovie = data.results[0].key;
      }
    );
   }

}
