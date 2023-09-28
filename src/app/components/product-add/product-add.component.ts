import { ProductService } from "./../../services/products.service";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { ProductsEnum, productState } from '../../ngrx/products.reducer';
import { NewProductsAction, SaveProductsAction } from '../../ngrx/products.action';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup?: FormGroup;
  submited?: boolean = false
  state:productState|null=null
  readonly productStateEnum=ProductsEnum
  constructor(private fb: FormBuilder, private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductsAction({}))
    this.store.subscribe((state)=>{
      this.state = state.catalogueState
    })
    
    if(this.state?.dataState==this.productStateEnum.NEW){
     this.submited=true
      this.productFormGroup = this.fb.group({
        name: ["", Validators.required],
        price: [0, Validators.required],
        quantity: [0, Validators.required],
        selected: [true, Validators.required],
        available: [false, Validators.required]
      })
    }



  }
  onSaveProduct() {
    this.submited=true
this.store.dispatch(new SaveProductsAction(this.productFormGroup?.value))
  }
  newProduct(){
    this.store.dispatch(new NewProductsAction({}))
  }
}
