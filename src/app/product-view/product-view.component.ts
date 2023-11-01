import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {


  products: Array<Product> = []
  filterText: string = ''

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  onSearch(name: string): void {
    this.productService.getAllProduct().subscribe({
      next: (product) => {
        if (name !== '') {
          this.products = product.filter(productItem => productItem?.itemName?.toLowerCase().includes(name.toLowerCase()))
        }
        else {
          this.products = product;
        }
        // this.items = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }


  filterCake(value: any) {
    this.productService.getAllProduct().subscribe({
      next: data => {
        if (value !== '') {
          this.products = data.filter((prod) =>
            prod.category?.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          this.products = data;
        }
      },
      error: err => {
        alert(err);
      }
    });
  }


}
