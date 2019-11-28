import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public movies$: Observable<Array<Movie>>;

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movies$ = this.movieService.getAll();
  }

}
