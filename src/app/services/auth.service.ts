import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  isLoggedIn: boolean = false;

  login(adminPassCode: string) {
    this.isLoggedIn = adminPassCode === "MA@2023";
  }

  logout() {
    this.isLoggedIn = false;
  }
}
