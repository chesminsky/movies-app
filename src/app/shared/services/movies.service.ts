import { Injectable } from '@angular/core';
import movies from '../mocks/movie.mock-data.json';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getAll(): Observable<Array<Movie>> {
    return of(movies);
  }

  public get(id: number): Observable<Movie> {
    const movie = movies.find((m) => m.id === id);
    return of(movie);
  }
}
