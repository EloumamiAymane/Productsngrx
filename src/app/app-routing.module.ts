import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "newProduct", component: ProductAddComponent },
  { path: "editProduct/:id", component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
