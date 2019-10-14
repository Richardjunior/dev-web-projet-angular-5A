import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleResponse, DetailsPeople } from './people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiUrlAllPeople = "https://api.themoviedb.org/3/person/popular?api_key=089e077279af9352976ba2161c971b70&language=en-US&page=1";

  constructor(private _http: HttpClient) { }

  getTrendings(): Observable<PeopleResponse> {
    return this._http.get<PeopleResponse>(this.apiUrlAllPeople);
  }
  getDetailsPeople(id: number): Observable<DetailsPeople> {
    return this._http.get<DetailsPeople>('https://api.themoviedb.org/3/person/'+id+'?api_key=089e077279af9352976ba2161c971b70&&language=en-US');
  }
}
