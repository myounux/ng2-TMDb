import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {NowPlayingMoviesComponent} from './now-playing-movies.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		NowPlayingMoviesComponent
	],
	exports: [
		NowPlayingMoviesComponent
	]
})
export class NowPlayingMoviesModule {
}
