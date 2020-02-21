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
    this.updateToken();
    return this.http.post(`${this.api}/movies`, movie, {
      headers: this.headers
    })
  }

  listMovies(): Observable<any> {
    this.updateToken();
    return this.http.get(`${this.api}/movies`, {
      headers: this.headers
    })
  }

  getMovie(id: string): Observable<any> {
    this.updateToken();
    return this.http.get(`${this.api}/movies/${id}`, {
      headers: this.headers
    })
  }

  updateMovie(movie: MovieInterface, id: string): Observable<any> {
    this.updateToken();
    return this.http.put(`${this.api}/movies/${id}`, movie, {
      headers: this.headers
    })
  }
}
