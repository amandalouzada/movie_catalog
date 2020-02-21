import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MoviesService } from 'src/app/services/movies.service';
import { MovieInterface } from 'src/app/interfaces/movie.interface';
import * as toastr from 'toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public formMovie: FormGroup;

  constructor(private moviesService: MoviesService) {
    this.formMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      mainActors: new FormControl('', Validators.required),
      youtubeTrailer: new FormControl('', Validators.required),
      summarizedPlot: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.formMovie.value);
    this.moviesService.newMovie(this.formMovie.value)
      .subscribe((res: { movie: MovieInterface }) => {
     toastr.success("Filme cadastrado");

      },
      (error)=>{
     toastr.error(error.error.message);

      })
  }

}
