import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DescribeService } from './describe.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ngbd-tabs',
  templateUrl: './describe.component.html'
})
export class DescribeComponent implements OnInit {
  currentJustify = 'start';
  movieId: number;
  constructor(private route: ActivatedRoute , describeService: DescribeService) {}

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
  }

}
