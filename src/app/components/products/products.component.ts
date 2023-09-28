import { Product } from "./../../model/product.model";
import { ProductService } from "./../../services/products.service";
import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";
import { catchError, map, Observable, of, startWith, filter } from "rxjs";
import { ActionEvent, ActionEventProduct, AppDataState, DataStateEnum } from "src/app/state/product.state";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { productState } from '../../ngrx/products.reducer';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$?: Observable<productState>;
  readonly DataStateEnum = DataStateEnum;
  productFormGroup?: FormGroup;
  constructor(//private fb: FormBuilder, private productService: ProductService, private router: Router
  private store:Store<any>) { }

  ngOnInit(): void {
this.products$=this.store.pipe(
  map((p) => p.catalogueState
))

    // this.productFormGroup = this.fb.group({
    //   keyword: this.fb.control(null)
    // })
  }

  // onGetAllProduct() {
  //   this.products$ = this.productService.getAllProduct().pipe(
  //     map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
  //     //startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
  //   )

  // }
  // onDelete(product: Product) {
  //   let v = confirm("Etes vous sur de vouloir supprimer?");


  //   if (v == true) {

  //     //  this.products$?.subscribe((data)=>{
  //     //   console.log(data)
  //     //  })
  //     this.productService.deleteProduct(product).subscribe(data => {

  //       this.onGetAllProduct();
  //     })
  //   }
  // }
  // onSaveProduct() {
  //   this.router.navigateByUrl("/newProduct")
  // }
  // onUpdate(p: Product) {
  //   this.router.navigateByUrl("/editProduct/" + p.id)
  // }

  // onSearch(dataForm: any) {

  //   this.products$ = this.productService.SearchProduct(dataForm.keyword).pipe(
  //     map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
  //     //startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
  //   )
  // }
  // onSelected() {
  //   this.products$ = this.productService.getSelectedProduct().pipe(
  //     map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
  //     //for testing
  //     //startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
  //   )
  // }
  // onAvailable() {
  //   this.products$ = this.productService.getAvailableProduct().pipe(
  //     map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
  //     //startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
  //   )
  // }
  // selected(product: Product) {
  //   this.productService.selectedProduct(product).subscribe(data => {

  //   })
  // }

  // onAction($event: ActionEvent) {
  //   console.log("emited par listComponent")
  //   switch ($event.type) {
  //     case ActionEventProduct.GET_ALL_PRODUCTS: this.onGetAllProduct(); break;
  //     case ActionEventProduct.GET_AVAILABLE_PRODUCTS: this.onAvailable(); break;
  //     case ActionEventProduct.GET_SELECTED_PRODUCTS: this.onSelected(); break;
  //     case ActionEventProduct.SEARCH_PRODUCTS: this.onSearch($event.payload); break;
  //     case ActionEventProduct.NEW_PRODUCTS: this.onSaveProduct(); break;
  //     case ActionEventProduct.EDIT_PRODUCTS: this.onUpdate($event.payload); break;
  //     case ActionEventProduct.DELETE_PRODUCTS: this.onDelete($event.payload); break;
  //     case ActionEventProduct.SELECT_PRODUCT: this.selected($event.payload); break;
  //   }
  // }
}
