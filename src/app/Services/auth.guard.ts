import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isAuthenticated = this.authService.getAuthStatus();
    console.log('bbbb',isAuthenticated )
    if (!isAuthenticated) {
      console.log('aaa',isAuthenticated)
      return this.router.createUrlTree(['/logn_in']);
    }
    return true;
  }
}
