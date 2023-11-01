import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() { }

  filterText: string = '';


  @Output()
  filterTextChanged: EventEmitter<any> = new EventEmitter<any>();

  filter() {
    this.filterTextChanged.emit(this.filterText);
  }

}
