import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { NewComponent } from './new/new.component';
import { MoviesComponent } from './movies.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    NewComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
