import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { BestMovieBasicComponent } from './best-movie/best-movie.component';

import { NgbdratingBasicComponent } from './rating/rating.component';
import { DescribeComponent } from './describe/describe.component';

import { CardsComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    NgbdAccordionBasicComponent,
    BestMovieBasicComponent,
    NgbdratingBasicComponent,
    DescribeComponent,
    CardsComponent,
  ]
})
export class ComponentsModule {}
