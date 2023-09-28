import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductActionType, ProductsAction } from './products.action';

export enum ProductsEnum{
  INITIAL="Initial",
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  NEW="New",
  EDIT="EDIT"
}

export interface productState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsEnum,
  currentProduct:Product|null
}
const initState: productState = {
  products: [],
  errorMessage: "",
  dataState: ProductsEnum.INITIAL,
  currentProduct:null
}
export function productReducer(state = initState, action: Action): productState{
switch(action.type){
  case ProductsAction.GET_ALL_PRODUCTS :return {...state,dataState:ProductsEnum.LOADING}
  case ProductsAction.GET_ALL_PRODUCTS_SUCCESS:
  return { ...state, dataState: ProductsEnum.LOADED, products: (<ProductActionType>action).payload }
  case ProductsAction.GET_ALL_PRODUCTS_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
                         /**Selected Products */
  case ProductsAction.GET_ALL_SELECTED_PRODUCTS: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.GET_ALL_SELECTED_PRODUCTS_SUCCESS: return { ...state, dataState: ProductsEnum.LOADED, products: (<ProductActionType>action).payload }
  case ProductsAction.GET_ALL_SELECTED_PRODUCTS_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
                        /**Available Products */
  case ProductsAction.GET_ALL_AVAILABLE_PRODUCTS: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.GET_ALL_AVAILABLE_PRODUCTS_SUCCESS: return { ...state, dataState: ProductsEnum.LOADED, products: (<ProductActionType>action).payload }
  case ProductsAction.GET_ALL_AVAILABLE_PRODUCTS_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
                        /**Search Products */
  case ProductsAction.GET_ALL_SEARCH_PRODUCTS: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.GET_ALL_SEARCH_PRODUCTS_SUCCESS: return { ...state, dataState: ProductsEnum.LOADED, products: (<ProductActionType>action).payload }
  case ProductsAction.GET_ALL_SEARCH_PRODUCTS_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
                         /**Select Products */
  case ProductsAction.GET_SELECTED_PRODUCT: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.GET_SELECTED_PRODUCT_SUCCESS:
    let product: Product = (<ProductActionType>action).payload
    let listProduct=[...state.products]
    let data:Product[]=listProduct.map((p)=>p.id == product.id?product:p)

  return { ...state, dataState: ProductsEnum.LOADED, products:data }
  case ProductsAction.GET_SELECTED_PRODUCT_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
                     /**delete Products */
  case ProductsAction.DELETE_PRODUCT: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.DELETE_PRODUCT_SUCCESS:
    let p: Product = (<ProductActionType>action).payload

    let listProducts = [...state.products]
    let index = listProducts.indexOf(p)
    listProducts.splice(index,1)

    return { ...state, dataState: ProductsEnum.LOADED, products: listProducts }
  case ProductsAction.DELETE_PRODUCT_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }

                            /**New Product */
  case ProductsAction.NEW_PRODUCT: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.NEW_PRODUCT_SUCCESS: return { ...state, dataState: ProductsEnum.NEW}
  case ProductsAction.NEW_PRODUCT_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }

                            /**SAVE Products */
  case ProductsAction.SAVE_PRODUCT: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.SAVE_PRODUCT_SUCCESS:
    let p1: Product = (<ProductActionType>action).payload
    let ListProducts = [...state.products]
    ListProducts.push(p1)

    return { ...state, dataState: ProductsEnum.LOADED, products: ListProducts }
  case ProductsAction.SAVE_PRODUCT_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }

                          /**Edit Product */
  case ProductsAction.EDIT_PRODUCT: return { ...state, dataState: ProductsEnum.LOADING }
  case ProductsAction.EDIT_PRODUCT_SUCCESS:
    
  return { ...state, dataState: ProductsEnum.EDIT, currentProduct: (<ProductActionType>action).payload }
  case ProductsAction.EDIT_PRODUCT_ERROR: return { ...state, dataState: ProductsEnum.ERROR, errorMessage: (<ProductActionType>action).payload }
default :return {...state}
}
}
