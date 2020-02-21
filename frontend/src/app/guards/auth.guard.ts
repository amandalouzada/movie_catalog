import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess()
  }
  private verifyAccess() {
    const token = localStorage.getItem('token')
    if (token && !helper.isTokenExpired(token)) {
      return true
    }
    this.router.navigate(['/auth'])
    return false
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess()
  }
}
