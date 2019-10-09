import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PeopleService } from './people.service';
import { People } from './people.model';

@Component({
  selector: 'app-ngbd-rating',
  templateUrl: './people.component.html',
  styles: [
    `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #1e90ff;
      }
      .heart {
        position: relative;
        display: inline-block;
        font-size: 3rem;
        color: #d3d3d3;
      }
      .full {
        color: red;
      }
      .half {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        color: red;
      }
    `
  ]
})
export class NgbdpeopleBasicComponent implements OnInit {
  currentRate = 8;
  currentRate2 = 2;
  selected = 0;
  hovered = 0;
  readonly = false;
  peoples$: People[];
   // for form integration
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  constructor (private peopleService: PeopleService){}
  ngOnInit(): void {
    this.getPeopleProfile();
  }

  getPeopleProfile() {
    this.peopleService.getTrendings().subscribe(
        data => {
          this.peoples$ = data.results;
         }
    );
  }
}

