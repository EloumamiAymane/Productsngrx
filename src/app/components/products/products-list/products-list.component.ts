import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, ActionEventProduct, AppDataState, DataStateEnum} from "../../../state/product.state";
import {Product} from "../../../model/product.model";
import { productState, ProductsEnum } from '../../../ngrx/products.reducer';
import { ProductsAction } from '../../../ngrx/products.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 @Input() productsInput$?: Observable<productState>;
  readonly DataStateEnum = ProductsEnum;
  constructor() { }

  ngOnInit(): void {
  }

//   selected(p: Product) {
// this.ProducteventEmitter.emit({type:ActionEventProduct.SELECT_PRODUCT,payload:p})
//   }

//   onDelete(p: Product) {
//     this.ProducteventEmitter.emit({type:ActionEventProduct.DELETE_PRODUCTS,payload:p})
//   }

//   onUpdate(p: Product) {
//     this.ProducteventEmitter.emit({type:ActionEventProduct.EDIT_PRODUCTS,payload:p})
//   }


//   onActionEvent($event: ActionEvent) {
//     console.log("emited par itemproduct on listproductcomponent"+$event.type)
// this.ProducteventEmitter.emit($event)
//   }
}
