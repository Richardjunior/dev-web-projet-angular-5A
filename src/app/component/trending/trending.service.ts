import { Injectable } from '@angular/core';
import { Trending, TrendingResponse } from './trending.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  apiUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';

  constructor( private _http: HttpClient) { }

  getTrending(): Observable<TrendingResponse> {
    return this._http.get<TrendingResponse>(this.apiUrl);
  }

}
