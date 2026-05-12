import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private readonly authService: AuthService) {
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get currentUser(): string | null {
    return this.authService.currentUser();
  }

  login(token: string) {
    this.authService.login(token);
  }

  logout() {
    this.authService.logout();
  }

  get token(): string | null {
    return this.authService.getToken();
  }
}
