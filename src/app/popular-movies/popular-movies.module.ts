import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { PopularMoviesComponent } from './popular-movies.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PopularMoviesComponent
  ],
  exports: [
    PopularMoviesComponent
  ]
})
export class PopularMoviesModule { }
