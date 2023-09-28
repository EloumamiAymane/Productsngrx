import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

/**Creer les differents Actions */
export enum ProductsAction{
  GET_ALL_PRODUCTS="[products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS="[products] Get All products succcess",
  GET_ALL_PRODUCTS_ERROR="[products] Handle products error",

             /**  Get all selected products   */

  GET_ALL_SELECTED_PRODUCTS="[products] Get All Selected Products",
  GET_ALL_SELECTED_PRODUCTS_SUCCESS ="[products] Get All Selected products succcess",
  GET_ALL_SELECTED_PRODUCTS_ERROR="[products] Handle  Selected products error",

              /**  Get all selected products   */

  GET_ALL_AVAILABLE_PRODUCTS = "[products] Get All Available Products",
  GET_ALL_AVAILABLE_PRODUCTS_SUCCESS = "[products] Get All Available products succcess",
  GET_ALL_AVAILABLE_PRODUCTS_ERROR = "[products] Handle  Available products error",

              /**  Get all selected products   */

  GET_ALL_SEARCH_PRODUCTS = "[products] Get All Search Products",
  GET_ALL_SEARCH_PRODUCTS_SUCCESS = "[products] Get All Search products succcess",
  GET_ALL_SEARCH_PRODUCTS_ERROR = "[products] Handle  Search products error",

                /**  Get  select product   */

  GET_SELECTED_PRODUCT = "[product] Get Selected Product",
  GET_SELECTED_PRODUCT_SUCCESS = "[product] Get Selected Product succcess",
  GET_SELECTED_PRODUCT_ERROR = "[product] Handle Selected Product error",

                 /**  Delete product   */

  DELETE_PRODUCT = "[product] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[product] Delete Product succcess",
  DELETE_PRODUCT_ERROR = "[product] Handle Delete Product error",

                  /**  New product   */

  NEW_PRODUCT = "[product] New Product",
  NEW_PRODUCT_SUCCESS = "[product] New Product succcess",
  NEW_PRODUCT_ERROR = "[product] Handle New Product error",

                  /** Save product   */

  SAVE_PRODUCT = "[product] Save Product",
  SAVE_PRODUCT_SUCCESS = "[product] Save Product succcess",
  SAVE_PRODUCT_ERROR = "[product] Handle Save Product error",

                  /** Edit product   */

  EDIT_PRODUCT = "[product] EDIT Product",
  EDIT_PRODUCT_SUCCESS = "[product] EDIT Product succcess",
  EDIT_PRODUCT_ERROR = "[product] Handle EDIT Product error",
}

export class GetAllProductsAction implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_PRODUCTS;
  constructor(public payload: any) {
  }
}
export class GetAllProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}
export class GetAllProductsActionError implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: string) {
  }
}
                /**  Selected Products */

export class GetAllSelectedProductsAction implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SELECTED_PRODUCTS;
  constructor(public payload: any) {
  }
}
export class GetAllSelectedProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}
export class GetAllSelectedProductsActionError implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

              /**  Available Products */

export class GetAllAvailaleProductsAction implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_AVAILABLE_PRODUCTS;
  constructor(public payload: any) {
  }
}
export class GetAllAvailaleProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_AVAILABLE_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}
export class GetAllAvailaleProductsActionError implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}
                /**  Search Products */

export class GetAllSearchProductsAction implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SEARCH_PRODUCTS;
  constructor(public payload: string) {
  }
}
export class GetAllSearchProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}
export class GetAllSearchProductsActionError implements Action {
  type: ProductsAction = ProductsAction.GET_ALL_SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

              /**  Select Product */

export class GetSelectProductsAction implements Action {
  type: ProductsAction = ProductsAction.GET_SELECTED_PRODUCT;
  constructor(public payload: Product) {
  }
}
export class GetSelectProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.GET_SELECTED_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}
export class GetSelectProductsActionError implements Action {
  type: ProductsAction = ProductsAction.GET_SELECTED_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

                  /**  Delete Product */

export class DeleteProductsAction implements Action {
  type: ProductsAction = ProductsAction.DELETE_PRODUCT;
  constructor(public payload: Product) {
  }
}
export class DeleteProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}
export class DeleteProductsActionError implements Action {
  type: ProductsAction = ProductsAction.DELETE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

                /**  New Product */

export class NewProductsAction implements Action {
  type: ProductsAction = ProductsAction.NEW_PRODUCT;
  constructor(public payload: any) {
  }
}
export class NewProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.NEW_PRODUCT_SUCCESS;
  constructor(public payload: any) {
  }
}
export class NewProductsActionError implements Action {
  type: ProductsAction = ProductsAction.NEW_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

                /**  Save Product */

export class SaveProductsAction implements Action {
  type: ProductsAction = ProductsAction.SAVE_PRODUCT;
  constructor(public payload: Product) {
  }
}
export class SaveProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.SAVE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}
export class SaveProductsActionError implements Action {
  type: ProductsAction = ProductsAction.SAVE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

                /**  Edit Product */

export class EditProductsAction implements Action {
  type: ProductsAction = ProductsAction.EDIT_PRODUCT;
  constructor(public payload: number) {
  }
}
export class EditProductsActionSuccess implements Action {
  type: ProductsAction = ProductsAction.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}
export class EditProductsActionError implements Action {
  type: ProductsAction = ProductsAction.EDIT_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}
export type ProductActionType =
  GetAllProductsAction | GetAllProductsActionSuccess
  | GetAllProductsActionError | GetAllSelectedProductsAction
  | GetAllSelectedProductsActionSuccess | GetAllSelectedProductsActionError
  |GetAllAvailaleProductsAction|GetAllAvailaleProductsActionSuccess|GetAllAvailaleProductsActionError
  |GetAllSearchProductsAction|GetAllSearchProductsActionSuccess|GetAllSearchProductsActionError
  |GetSelectProductsAction|GetSelectProductsActionSuccess|GetSelectProductsActionError
  |DeleteProductsAction|DeleteProductsActionSuccess|DeleteProductsActionError
  |NewProductsAction|NewProductsActionSuccess|NewProductsActionError
  |SaveProductsAction|SaveProductsActionSuccess|SaveProductsActionError
  | EditProductsAction | EditProductsActionSuccess | EditProductsActionError


