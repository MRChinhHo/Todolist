import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from './Services/server-http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router, private serverHttp: ServerHttpService) { }

  login(): void {
    // Gọi đến server để xác thực tài khoản người dùng
    this.serverHttp.getProfile().subscribe((data: any) => {
      const matchedUser = data
    
      if (matchedUser) {
        this.isAuthenticated = true;
        this.router.navigate(['/home']);
      
      } else 
        if (!matchedUser) {
          this.isAuthenticated = true;
      }
    });
   
    }
    getAuthStatus(): boolean {
      return this.isAuthenticated;
  }

  logout(): void {
    // Xử lý đăng xuất người dùng
    this.isAuthenticated = false;
    this.router.navigate(['/logn_in']);
  }
}
