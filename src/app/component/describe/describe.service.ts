import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Describe } from './describe.model';

@Injectable({
  providedIn: 'root'
})
export class DescribeService {
 // apiUrlAllTrending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';

  constructor(private _http: HttpClient) { }

  getDescribeMovie(id: number) {
    return this._http.get<Describe>('https://api.themoviedb.org/3/movie/429617?api_key=089e077279af9352976ba2161c971b70&language=en-US');
  }
}
