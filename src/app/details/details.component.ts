import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../shared/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import rater from 'rater-js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public movie$: Observable<Movie>;

  @ViewChild('rater', { static: false }) set content(elRef: ElementRef) {

    const element = elRef.nativeElement;
    const rating = element.getAttribute('rate');
    const raterElement = rater({
      element,
      max: 10,
      starSize: 24,
      readOnly: true
    });
    raterElement.setRating(Number(rating));
  }

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.movie$ = this.moviesService.get(id);
  }

  public back() {
    this.router.navigate(['']);
  }

}
