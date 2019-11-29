import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public movie$: Observable<Movie>;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.movie$ = this.moviesService.get(id);
  }

}
