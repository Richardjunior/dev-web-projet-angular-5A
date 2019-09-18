import { Component, OnInit } from '@angular/core';
import { StarterService } from './starter.service';
import { Starter } from './starter.model';
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
})
export class StarterComponent implements OnInit {
  subtitle: string;
  starters$: Starter[];

  constructor( private starterService: StarterService) {
    this.subtitle = 'This is some text within a card block.';
  }


  ngOnInit() {
    return this.starterService.getTrendings().subscribe(data => {
        this.starters$ = data.results;
    });
  }
}

