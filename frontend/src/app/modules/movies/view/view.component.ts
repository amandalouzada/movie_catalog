import { Component, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public play: boolean = false;

  public movie: MovieInterface = {
    title: 'Batman: The Killing Joke',
    genre: 'Animation, Action, Crime, Drama, Thriller',
    releaseDate: '25 Jul 2016',
    mainActors: 'Kevin Conroy, Mark Hamill, Tara Strong, Ray Wise',
    summarizedPlot: 'As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.',
    youtubeTrailer: 'https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  }
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((param: { id: string }) => {
      this.getMovieDetail(param.id);
    });
  }

  getMovieDetail(id: string) {

    this.moviesService.getMovie(id)
      .subscribe((res: { movie: MovieInterface }) => {
        this.movie = res.movie;
      },
      (error)=>{
        console.log(error.error);
      })

  }

}
