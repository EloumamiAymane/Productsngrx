import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/products.service';
import { EditProductsAction } from '../../ngrx/products.action';
import { productState, ProductsEnum } from '../../ngrx/products.reducer';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup?: FormGroup;
  submited?: boolean = false;
  productId: number;
  state:productState|null=null
  formBuilt:boolean=false
  readonly productEnum=ProductsEnum
  constructor(private activateRoute: ActivatedRoute, private store: Store<any>, private fb: FormBuilder) {
    this.productId = activateRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
 this.store.dispatch(new EditProductsAction(this.productId))
this.store.subscribe((state)=>{

  this.state = state.catalogueState
})
console.log(this.state)
if(this.state?.dataState==this.productEnum.LOADING){

    if(this.state.currentProduct!=null){

      this.productFormGroup = this.fb.group({
        id: [this.state.currentProduct.id, Validators.required],
        name: [this.state.currentProduct.name, Validators.required],
        price: [this.state.currentProduct.price, Validators.required],
        quantity: [this.state.currentProduct.quantity, Validators.required],
        selected: [this.state.currentProduct.selected, Validators.required],
        available: [this.state.currentProduct.available, Validators.required]
      })
      this.formBuilt=true
    }
}



  }
  OnUpdateProduct() {
    this.submited = true
    if (this.productFormGroup?.invalid) return
    // this.productsService.UpdateProduct(this.productFormGroup?.value).subscribe(data => {
    //   alert("Product Updated !");
    // })
  }

  OkUpdate() {

  }
}
