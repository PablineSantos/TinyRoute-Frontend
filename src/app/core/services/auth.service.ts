import {Injectable, signal} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInSignal = signal<boolean>(false);
  isLoggedIn = this.loggedInSignal.asReadonly();


  currentUser = signal<string | null>(null);

  constructor() {
    this.syncState();
  }

  private isTokenValid(token: string | null): boolean {
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return (payload.exp * 1000) > Date.now();
    } catch (e) {
      return false;
    }
  }

  private getUserNameFromToken(token: string): string | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Payload decodificado:', payload);
      return payload.name || payload.sub || 'Usuário';
    } catch (e) {
      return null;
    }
  }

  private syncState() {
    const token = localStorage.getItem('token');
    if (this.isTokenValid(token)) {
      this.loggedInSignal.set(true);
      this.currentUser.set(this.getUserNameFromToken(token!));
    } else {
      this.logout();
    }
  }

  login(token: string): void {
    localStorage.setItem('token', token);
    this.loggedInSignal.set(true);
    this.currentUser.set(this.getUserNameFromToken(token));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSignal.set(false);
    this.currentUser.set(null);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!this.isTokenValid(token)) {
      this.logout();
      return null;
    }
    return token;
  }
}
