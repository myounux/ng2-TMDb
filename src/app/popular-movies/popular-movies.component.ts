import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../shared';

@Component({
  selector: 'popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies: Array<Movie> = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this._moviesService.getPopular(this.currentPage)
      .subscribe(response => {
        this.movies = response.results;
        this.totalPages = response.totalPages;
      });
  }

  goToPage(pageNumber) {
    this.currentPage = pageNumber;
    this.getMovies();
  }

  searchMovie(title) {
    this._moviesService.search(title)
      .subscribe(response => {
        this.movies = response.results;
        this.totalPages = response.totalPages;
      });
  }

}
