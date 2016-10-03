import { Route } from '@angular/router';
import { TopRatedMoviesComponent } from './top-rated-movies.component';

export const topRatedMoviesRoutes: Route[] = [
  {
    path: 'top-rated',
    component: TopRatedMoviesComponent
  }
];
