import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from './../../../product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    // this.products$ = this.cartService.cart$;
      this.products$ = this.cartService.cart$.pipe(
        map((products: []) => {
          const distintos = [...new Set(products)];
          return distintos;
        })
      );
  }

  ngOnInit(): void {}

}
