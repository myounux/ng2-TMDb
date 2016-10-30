import {Route} from '@angular/router';
import {NowPlayingMoviesComponent} from './now-playing-movies.component';

export const nowPlayingMoviesRoutes: Route[] = [
	{
		path: 'now-playing',
		component: NowPlayingMoviesComponent
	}
];
