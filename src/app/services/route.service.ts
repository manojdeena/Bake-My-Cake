import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  navigateToHomeView() {
    this.router.navigate([""]);
  }

  navigateToProductRequestsView() {
    this.router.navigate(["product-requests"]);
  }

  navigateToLoginView() {
    this.router.navigate(["login"]);
  }

}
