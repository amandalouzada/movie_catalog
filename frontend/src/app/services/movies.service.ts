import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInterface } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends BaseService {

  constructor(private http: HttpClient) { super() }

  newMovie(movie: MovieInterface): Observable<any> {
    return this.http.post(`${this.api}/movies`, movie, {
      headers: this.headers
    })
  }
}
