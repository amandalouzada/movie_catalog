import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'
const helper = new JwtHelperService()

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public token: string;
  public isExpired: boolean;
  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
    this.isExpired = helper.isTokenExpired(this.token)
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

}
