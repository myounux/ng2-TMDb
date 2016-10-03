import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UpcomingMoviesComponent } from './upcoming-movies.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UpcomingMoviesComponent
  ],
  exports: [
    UpcomingMoviesComponent
  ]
})
export class UpcomingMoviesModule { }
