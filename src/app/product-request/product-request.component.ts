import { Component, OnInit } from '@angular/core';
import { ProductRequest } from '../models/product-request';
import { ProductRequestService } from '../services/product-request.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-product-request',
  templateUrl: './product-request.component.html',
  styleUrls: ['./product-request.component.css']
})
export class ProductRequestComponent implements OnInit {
  constructor(private productRequestService: ProductRequestService, private routeService: RouteService) { }

  displayedColumns: string[] = ['id', 'dateOfOrder', 'customerName', 'customerEmail', 'customerPhone', 'itemName','price', 'quantity', 'totalAmount', 'citation'];
  productRequests: ProductRequest[] = [];

  ngOnInit(): void {
    this.productRequestService.getAllProductReqeusts().subscribe({
      next: data => {
        this.productRequests = data;

      },
      error: err => {
        alert(err);
      }
    });
  }
  logout() {
    this.routeService.navigateToHomeView()
  }

}
