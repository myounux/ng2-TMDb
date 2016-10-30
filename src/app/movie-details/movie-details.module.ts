import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {MovieDetailsComponent} from './movie-details.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		MovieDetailsComponent
	],
	exports: [
		MovieDetailsComponent
	]
})
export class MovieDetailsModule {
}
