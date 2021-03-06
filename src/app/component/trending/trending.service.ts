import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { TrendingResponse, Trending } from './trending.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  apiUrlAllTrending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';

  constructor( private _http: HttpClient) { }

  getTrendings(): Observable<TrendingResponse> {
    return this._http.get<TrendingResponse>(this.apiUrlAllTrending);
  }

  getTrendingsByGenre(id: number): Observable<TrendingResponse> {
    return this._http.get<TrendingResponse>(this.apiUrlAllTrending);
  }
}
