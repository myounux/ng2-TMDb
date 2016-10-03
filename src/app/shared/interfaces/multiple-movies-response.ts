import { Movie } from '../classes';

export interface MultipleMoviesResponse {
  page: number;
  results: Movie[];
  totalResults: number
  totalPages: number;
}
