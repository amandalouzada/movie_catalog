import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieInterface } from 'src/app/interfaces/movie.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public movie: MovieInterface;
  public formMovie: FormGroup;

  constructor(private moviesService: MoviesService, private router:Router, private route: ActivatedRoute) {
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
    this.route.params.subscribe((param:{id:string})=>{
      this.getMovieDetail(param.id);
    })

  }

  update() {
    this.moviesService.updateMovie(this.formMovie.value, this.movie._id)
      .subscribe((res: { movie: MovieInterface }) => {
        this.router.navigate([`/movies/${res.movie._id}/view`]);
        console.log(res);
      },
        (error) => {
          console.log(error);
        })
  }

  getMovieDetail(id: string) {
    this.moviesService.getMovie(id)
      .subscribe((res: { movie: MovieInterface }) => {
        this.movie = res.movie;
        this.formMovie.patchValue({
          ...res.movie
        });
      },
      (error)=>{
        console.log(error.error);
      })

  }

}
