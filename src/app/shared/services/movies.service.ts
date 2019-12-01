import { Injectable } from '@angular/core';
import movies from '../mocks/movie.mock-data.json';
import { Observable, of, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Array<Movie> = movies;

  constructor() { }

  public get(id: number): Observable<Movie> {
    const movie = this.movies.find((m) => m.id === id);
    return of(movie);
  }

  public filter(term$: Observable<string>, genres$: Observable<string[]>): Observable<Array<Movie>> {
    return combineLatest(
      term$.pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      ),
      genres$.pipe(
        startWith([])
      )
    ).pipe(
      map(([term, genres]) => {

        return this.movies.filter((m) => {
          return term ? m.name.toLowerCase().includes(term.toLowerCase()) : true;
        }).filter((m) => {
          return genres.length ? genres.every((g) => m.genres.includes(g)) : true;
        });
      })
    );
  }
}
