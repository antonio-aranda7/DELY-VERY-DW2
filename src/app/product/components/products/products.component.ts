import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import {ProductsService} from './../../../core/services/products/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService 
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  products: Product[] = [];

  clicProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts (){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}