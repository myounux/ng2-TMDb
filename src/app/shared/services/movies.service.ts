import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../classes';
import { MultipleMoviesResponse } from '../interfaces';
import { tmdbUrls, tmdbApiKey } from '../constantes';


@Injectable()
export class MoviesService {

  constructor(private _http: Http) { }

  get(id: number): Observable<Movie> {
    return this._http.get(`${tmdbUrls.base}/movie/${id}?api_key=${tmdbApiKey}`)
      .map((response: Response) => response.json())
      .map((data: any) => {
        return data.map(item => this.convertToMovie(item))
      });
  }

  getPopular(page: number = 1): Observable<MultipleMoviesResponse> {
    return this._http.get(`${tmdbUrls.popular}&page=${page}`)
      .map((response: Response) => this.prepareResponse(response));
  }

  getTopRated(page: number = 1): Observable<MultipleMoviesResponse> {
    return this._http.get(`${tmdbUrls.topRated}&page=${page}`)
      .map((response: Response) => this.prepareResponse(response));
  }

  getUpcoming(page: number = 1): Observable<MultipleMoviesResponse> {
    return this._http.get(`${tmdbUrls.upcoming}&page=${page}`)
      .map((response: Response) => this.prepareResponse(response));
  }

  getNowPlaying(page: number = 1): Observable<MultipleMoviesResponse> {
    return this._http.get(`${tmdbUrls.nowPlaying}&page=${page}`)
      .map((response: Response) => this.prepareResponse(response));
  }

  search(title: string): Observable<MultipleMoviesResponse> {
    return this._http.get(`${tmdbUrls.search}&query=${title}`)
      .map((response: Response) => this.prepareResponse(response));
  }

  private prepareResponse(response: Response): MultipleMoviesResponse {
    let data = response.json();
    return {
      page: data.page,
      results: data.results.map(item => this.convertToMovie(item)),
      totalResults: data.total_results,
      totalPages: data.total_pages
    }
  }

  private convertToMovie(data: any): Movie {
    let movie = new Movie();
    movie.title = data.title
    movie.releaseDate = data.release_date
    movie.voteAverage = data.vote_average
    movie.voteCount = data.vote_count
    movie.overview = data.overview
    movie.posterPath = data.poster_path

    return movie;
  }
}
