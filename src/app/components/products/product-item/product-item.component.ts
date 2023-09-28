import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ActionEventProduct} from "../../../state/product.state";
import { Store } from '@ngrx/store';
import { GetSelectProductsAction, DeleteProductsActionSuccess, DeleteProductsAction } from '../../../ngrx/products.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input()product?:Product;

  constructor(private store:Store<any>,private router:Router) { }

  ngOnInit(): void {
  }

  selected(product: Product) {

  this.store.dispatch(new GetSelectProductsAction(product))
   // this.ProducteventEmitter.emit({type:ActionEventProduct.SELECT_PRODUCT,payload:product})
  }

  onDelete(p: Product) {

    this.store.dispatch(new DeleteProductsAction(p))
  }

  onUpdate(p: Product) {
    this.router.navigateByUrl("editProduct/"+p.id)
  }
}
