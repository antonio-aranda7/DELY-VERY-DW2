import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '6',
      title: 'Stickers',
      image:'assets/images/stickers2.png',
      price: 30000,
      description: 'bla bla bla bla bla  '
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {

    const updateProduct: Partial <Product> = {
      price: 5000,
      description: 'Edit bla bla ',
    };

    this.productsService.updateProduct('1',updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('6').subscribe(rta =>{
      console.log(rta);
    });
  }

}
