import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'auth/login',
    signup: 'auth/register'
  };

  constructor() { }

  handle(token): void {
    this.set(token);
  }

  set(token): void {
    localStorage.setItem('token', token);
  }

  get(): string {
    return localStorage.getItem('token');
  }

  remove(): void {
    localStorage.removeItem('token');
  }

  isValid(): boolean {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
       return  Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token): any {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload): any {
    return JSON.parse(atob(payload));
  }

  loggedIn(): boolean {
    return this.isValid();
  }
}
