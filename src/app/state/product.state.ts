export enum DataStateEnum {
  LOADING,
    LOADED,
    ERROR
}
export enum ActionEventProduct{
  GET_ALL_PRODUCTS="[PRODUCTS] Get All Products",
  GET_SELECTED_PRODUCTS="[PRODUCTS] Get Selected Products",
  GET_AVAILABLE_PRODUCTS="[PRODUCTS] Get Available Products",
  SEARCH_PRODUCTS="[PRODUCTS] Search Products",

  NEW_PRODUCTS="[PRODUCTS] New Products",
  DELETE_PRODUCTS="[PRODUCTS] Delete Products",
  EDIT_PRODUCTS="[PRODUCTS] Edit Products",
  SELECT_PRODUCT="[PRODUCTS] Select Products"

}
export interface ActionEvent{
  type:ActionEventProduct,
  payload?:any
}


export interface AppDataState<T> {
    dataState?: DataStateEnum,
    data?: T,
    errorMessage?: string
}
