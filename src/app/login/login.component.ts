import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminPassCode: string = ''

  constructor(private authService: AuthService, private routeService: RouteService) { }
  ngOnInit(): void {

  }

  validateAdminCode() {
    this.authService.login(this.adminPassCode);
    if (this.authService.isLoggedIn) {
      this.routeService.navigateToProductRequestsView();
    }
  }

  
}
 