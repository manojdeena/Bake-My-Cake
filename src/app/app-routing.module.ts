import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductRequestComponent } from './product-request/product-request.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: ProductViewComponent },
  { path: "order-view/:id", component: OrderViewComponent, canDeactivate: [canDeactivateGuard] },
  { path: "product-requests", component: ProductRequestComponent, canActivate: [authGuard] },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
