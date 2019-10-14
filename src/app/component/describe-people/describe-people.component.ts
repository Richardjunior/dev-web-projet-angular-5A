import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PeopleService } from '../people/people.service';
import { People, Fnownfor, DetailsPeople } from '../people/people.model';



@Component({
  selector: 'app-ngbd-accordion-basic',
  templateUrl: 'describe-people.component.html'
})
export class DescribePeopleComponent implements OnInit{
  peopleId: number;
  people$: People[] = new Array<People>();
  movieOfPeople$: Array<Fnownfor>;
  detailOfPeople$: DetailsPeople;
  constructor(private route: ActivatedRoute, private peopleService: PeopleService ){}
  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.getIdPeople();
    this.getDescriptionPeople(this.peopleId);
    this.getDetailsPeople(this.peopleId);

  }

  getIdPeople() {
    this.route.paramMap.pipe(
      map(params => {
          this.peopleId = parseInt(params.get('id'), 10);
        })
    ).subscribe();
  }
  getDescriptionPeople(id: Number){
    this.peopleService.getTrendings().subscribe(
      data => {
        for (let i = 0 ; i < data.results.length ; i++ ) {
            if ( data.results[i].id == id ) {
                this.people$[0]=data.results[i];
                //console.log(this.people$[0].known_for[0].release_date);
                this.movieOfPeople$ = data.results[i].known_for;
                console.log(this.people$[0]);
                return;
            }
        }
       }
  );
  }

  getDetailsPeople(id: number){
    this.peopleService.getDetailsPeople(id).subscribe(
      data =>{
        this.detailOfPeople$ = data;
        console.log(data);
      }
    );

  }
}
