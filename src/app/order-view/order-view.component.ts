import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductRequestService } from '../services/product-request.service';
import { Product } from '../models/product';
import { ProductRequest } from '../models/product-request';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';



@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  constructor(private productService: ProductService,
    private productRequestService: ProductRequestService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService) { }
  product!: Product
  productRequest: ProductRequest = {
    id: 0,
    itemName: '',
    quantity: '',
    price: 0,
    dateOfOrder: new Date(),
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    citation: '',
    doorNo: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    totalAmount: 0
  }


  minDate = new Date();

  // totalAmount = 0


  submitStatus: boolean = false

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? 0;
      this.productService.getproduct(+id).subscribe(data => {
        this.product = data;

      })
    })

  }



  makeRequest() {
    if (this.productRequest.customerName && this.productRequest.customerEmail && this.productRequest.customerPhone && this.productRequest.dateOfOrder) {
      this.productRequest.itemName = this.product?.itemName;
      this.productRequest.price = this.product?.price;

      this.productRequestService.saveProductRequest(this.productRequest).subscribe
        ({
          next: data => {
            this.snackBar.open("Request Submitted", "Success", { duration: 3000 });
            this.submitStatus = true;
            this.routeService.navigateToHomeView();
          },
          error: err => {
            console.log(err);
            alert(err);
          }
        })
    }
  }


  calculateTotalPrice() {
    let quantity1 = this.productRequest.quantity;
    if (this.product.price != undefined && quantity1 >= 0) {
      this.productRequest.totalAmount = quantity1 * this.product.price
    }
    else {
      this.productRequest.quantity = 0
    }
  }


  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Are you sure You  want to leave the page")
      return this.submitStatus
    }
    return true
  }

}