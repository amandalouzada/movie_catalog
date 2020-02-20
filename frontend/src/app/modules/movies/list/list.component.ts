import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieInterface } from 'src/app/interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies: MovieInterface[] = [];
  public testYoutube: string = 'https://www.youtube.com/watch?v=bFZCLcSyB20';
  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  goToView(id:string) {
    this.router.navigate([`/movies/${id}/view`]);
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
