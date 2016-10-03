import { Routes } from '@angular/router';

import { popularMoviesRoutes } from './popular-movies';
import { topRatedMoviesRoutes } from './top-rated-movies';
import { upcomingMoviesRoutes } from './upcoming-movies';
import { nowPlayingMoviesRoutes } from './now-playing-movies';

export const routes: Routes = [
  { path: '', redirectTo: '/popular', pathMatch: 'full' },
  ...popularMoviesRoutes,
  ...topRatedMoviesRoutes,
  ...upcomingMoviesRoutes,
  ...nowPlayingMoviesRoutes
];
