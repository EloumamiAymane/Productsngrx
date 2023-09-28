import { Product } from "./../model/product.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";




/**
 pour que ce service soit injectable dans le root de l'app
 */
@Injectable({ providedIn: "root" })
export class ProductService {
    host = environment.host
    constructor(private http: HttpClient) {

    }
    getAllProduct(): Observable<Product[]> {

        return this.http.get<Product[]>(this.host + "/products");
    }
    deleteProduct(product: Product): Observable<void> {

        return this.http.delete<void>(this.host + "/products/" + product.id);
    }
    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.host + "/products", product);
    }
    getProduct(productId: number | null): Observable<Product> {
        return this.http.get<Product>(this.host + "/products/" + productId);
    }
    UpdateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(this.host + "/products/" + product.id, product);
    }
    SearchProduct(keyword: any): Observable<Product[]> {

        // console.log(keyword);
        return this.http.get<Product[]>(this.host + "/products?name_like=" + keyword);
    }
    getSelectedProduct(): Observable<Product[]> {

        return this.http.get<Product[]>(this.host + "/products?selected=true");

    }
    getAvailableProduct(): Observable<Product[]> {

        return this.http.get<Product[]>(this.host + "/products?available=true");

    }
    selectedProduct(product: Product): Observable<Product> {

      return this.http.put<Product>(this.host + "/products/" + product.id, { ...product, selected: !product.selected });
    }






















}
