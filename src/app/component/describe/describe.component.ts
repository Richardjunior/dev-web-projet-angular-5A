import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DescribeService } from './describe.service';
import { map } from 'rxjs/operators';
import { Describe, Movie } from './describe.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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
  url: SafeResourceUrl;
  constructor(private route: ActivatedRoute , private describeService: DescribeService , private sanitizer:DomSanitizer) {}

  currentOrientation = 'horizontal';
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }


  ngOnInit() {
        this.getIdMovie();
        this.getVideoOfMovie();
        this.getDescribeMovie();
   }
   getIdMovie() {
    this.route.paramMap.pipe(
      map(params => {
          this.movieId = parseInt(params.get('id'), 10);
        })
    ).subscribe();
  }
   getDescribeMovie() {
    this.describeService.getDescribeMovie(this.movieId).subscribe(
      data => {
          this.describeMovie$ =  data;
      }
    );
   }
 getVideoOfMovie() {
  this.describeService.getVideoOfMovie(this.movieId).subscribe(
    data => {
        this.MovieVideo$ =  data.results;
        this.keyMovie = data.results[0].key;
        this.youtubeUrl = 'https://www.youtube.com/watch?v=' + this.keyMovie;
        this.youtubeUrl = this.youtubeUrl.replace("watch?v=" , "embed/");
     this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
     console.log(this.youtubeUrl);
    }
  );
 }
  
}
