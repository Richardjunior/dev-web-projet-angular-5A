import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleService } from '../people/people.service';
import { Observable } from 'rxjs';
import { DetailsPeople } from '../people/people.model';

@Injectable({
  providedIn: 'root'
})
export class DescribePeopleService {
  constructor(private _http: HttpClient , private peopleService: PeopleService) { }

}
