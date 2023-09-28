import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionEvent, ActionEventProduct } from "../../../state/product.state";
import { GetAllProductsAction, GetAllSelectedProductsAction, GetAllAvailaleProductsAction, GetAllSearchProductsAction } from '../../../ngrx/products.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  constructor(private store: Store<any>,private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  onSelected() {
    this.store.dispatch(new GetAllSelectedProductsAction({}))

  }

  onAvailable() {
    this.store.dispatch(new GetAllAvailaleProductsAction({}))
  }

  onSaveProduct() {
    this.router.navigateByUrl("/newProduct")
  }

  onSearch(data: any) {
    console.log(data)
    this.store.dispatch(new GetAllSearchProductsAction(data.keyword))
  }
}
