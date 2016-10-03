import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../shared';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {
	movies: Array<Movie> = [];
    currentPage: number = 1;
    totalPages: number = 1;

    constructor(private _moviesService: MoviesService) { }

    ngOnInit() {
      this.getMovies();
    }

    getMovies() {
      this._moviesService.getNowPlaying(this.currentPage)
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
