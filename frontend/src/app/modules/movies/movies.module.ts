import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { NewComponent } from './new/new.component';
import { MoviesComponent } from './movies.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component'
import { YoutubeImgPipe } from 'src/app/pipes/youtube-img.pipe';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    NewComponent,
    MoviesComponent,
    ListComponent,
    YoutubeImgPipe,
    ViewComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MoviesModule { }
