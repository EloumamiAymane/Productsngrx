import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductService } from "../services/products.service";
import { ProductsAction, GetAllProductsActionSuccess, GetAllProductsActionError, GetAllSelectedProductsActionSuccess, GetAllSelectedProductsActionError, GetAllAvailaleProductsActionSuccess, GetAllAvailaleProductsActionError, ProductActionType, GetAllSearchProductsActionSuccess, GetAllSearchProductsActionError, GetSelectProductsActionSuccess, GetSelectProductsActionError, DeleteProductsActionSuccess, DeleteProductsActionError, NewProductsActionSuccess, SaveProductsActionSuccess, SaveProductsActionError, EditProductsActionSuccess, EditProductsActionError } from './products.action';

@Injectable()
export class ProductsEffects{
constructor( private productService:ProductService,private effectActions:Actions){}

getAllProducts:Observable<Action>=createEffect(
()=>this.effectActions.pipe(
  ofType(ProductsAction.GET_ALL_PRODUCTS),
  mergeMap(()=>{
    return this.productService.getAllProduct()
    .pipe(
      map((p)=>new GetAllProductsActionSuccess(p)),
      catchError((err)=>of(new GetAllProductsActionError(err)))
    )
  })
)
);

              /**Selected Products */


  getAllSelectedProducts: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.GET_ALL_SELECTED_PRODUCTS),
      mergeMap(() => {
        return this.productService.getSelectedProduct()
          .pipe(
            map((p) => new GetAllSelectedProductsActionSuccess(p)),
            catchError((err) => of(new GetAllSelectedProductsActionError(err)))
          )
      })
    )
  );

                /**Available Products */


  getAllAvailableProducts: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.GET_ALL_AVAILABLE_PRODUCTS),
      mergeMap(() => {
        return this.productService.getAvailableProduct()
          .pipe(
            map((p) => new GetAllAvailaleProductsActionSuccess(p)),
            catchError((err) => of(new GetAllAvailaleProductsActionError(err)))
          )
      })
    )
  );

               /**Search  Product */


  getAllSearchProducts: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.GET_ALL_SEARCH_PRODUCTS),
      mergeMap((action: ProductActionType) => {
        return this.productService.SearchProduct(action.payload)
          .pipe(
            map((p) => new GetAllSearchProductsActionSuccess(p)),
            catchError((err) => of(new GetAllSearchProductsActionError(err)))
          )
      })
    )
  );

                /**Select  Product */


  getSelectedhProducts: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.GET_SELECTED_PRODUCT),
      mergeMap((action: ProductActionType) => {
        return this.productService.selectedProduct(action.payload)
          .pipe(
            map((p) => new GetSelectProductsActionSuccess(p)),
            catchError((err) => of(new GetSelectProductsActionError(err)))
          )
      })
    )
  );
                  /**Delete  Product */


 DeleteProduct: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.DELETE_PRODUCT),
      mergeMap((action: ProductActionType) => {

        return this.productService.deleteProduct(action.payload)
          .pipe(
            map(() => new DeleteProductsActionSuccess(action.payload)),
            catchError((err) => of(new DeleteProductsActionError(err)))
          )
      })
    )
  );

                   /**New  Product */


  NewProduct: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.NEW_PRODUCT),
      map(() => {
        return new NewProductsActionSuccess({})
      })
    )
  );

                    /**Save  Product */


SaveProduct: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.SAVE_PRODUCT),
      mergeMap((action: ProductActionType) => {

        return this.productService.addProduct(action.payload)
          .pipe(
            map((p) => new SaveProductsActionSuccess(p)),
            catchError((err) => of(new SaveProductsActionError(err)))
          )
      })
    )
  );

                  /**Edit  Product */


  EditProduct: Observable<ProductActionType> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsAction.EDIT_PRODUCT),
      mergeMap((action: ProductActionType) => {

        return this.productService.getProduct(action.payload)
          .pipe(
            map((p) => new EditProductsActionSuccess(p)),
            catchError((err) => of(new EditProductsActionError(err)))
          )
      })
    )
  );
}
