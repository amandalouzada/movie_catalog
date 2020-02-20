import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieInterface } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies: MovieInterface[] = [];
  public testYoutube: string ='https://www.youtube.com/watch?v=bFZCLcSyB20';
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  goToView() {
    console.log('ir para Vizualizacao')
  }

  getMovies() {
    this.moviesService.listMovies()
      .subscribe(
        (res: { list: MovieInterface[], page: number, pageSize: number, totalResults }) => {
          this.movies = res.list;
        },
        (error: { error: any }) => {
          console.log(error.error);
        })
  }

}
