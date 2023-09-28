import { TestBed } from '@angular/core/testing';
import { ProductService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
describe('testService', () => {
  let productService: ProductService;
  let httptestingController: HttpTestingController;
  let host = environment.host
  let products: Product[]
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientTestingModule]

    })
    productService = TestBed.inject(ProductService)
    httptestingController = TestBed.inject(HttpTestingController)
    products = [
      {
        id: 1,
        name: "Pc",
        price: 3000,
        quantity: 365,
        selected: false,
        available: true
      },
      {
        id: 2,
        name: "Printer",
        price: 250,
        quantity: 365,
        selected: true,
        available: true
      },
      {
        name: "computer",
        price: 157,
        quantity: 20,
        selected: true,
        available: false,
        id: 3
      },
      {
        id: 4,
        name: "CD",
        price: 257,
        quantity: 47,
        selected: true,
        available: true
      },]
  })


  it('it should return all products', () => {
    productService.getAllProduct().subscribe((data) => {
      expect(data).toEqual(products)
    });
    const request = httptestingController.expectOne(host + "/products")
    request.flush(products)
    expect(request.request.method).toBe('GET')
  })
  it(' it should  delete Product ', () => {
    let product: Product = products[0]
    productService.deleteProduct(product).subscribe((data) => {
      expect(products.length).toBe(4)
    });
    const req = httptestingController.expectOne(host + "/products/" + product.id)
    req.flush(product)
    expect(req.request.method).toBe('DELETE')

  })

  it('it should save Product', () => {
    let product1: Product = {
      id: 5,
      name: "disque",
      price: 257,
      quantity: 47,
      selected: true,
      available: true
    }
    productService.addProduct(product1).subscribe((data) => {
      expect(data).toEqual(product1)

    });

    const req = httptestingController.expectOne(host + "/products")
    req.flush(product1)
    expect(req.request.method).toBe('POST')

  })

  it('it should update product', () => {
    let product: Product = products[1]
    productService.UpdateProduct(product).subscribe((data) => {
      expect(data).toEqual(product)
    });
    const req = httptestingController.expectOne(host + "/products/" + product.id)
    req.flush(product)
    expect(req.request.method).toBe('PUT')

  })
  it('find project by keyword', () => {
    let keyword: String = "d"
    productService.SearchProduct(keyword).subscribe((data) => {
      expect(data).toEqual(products)
    })
    const req = httptestingController.expectOne(host + "/products?name_like=" + keyword)
    req.flush(products)
    expect(req.request.method).toBe('GET')
  })
  it('return Project By Id', () => {
    let product = products[2]
    productService.getProduct(product.id).subscribe((data) => {
      expect(data).toEqual(product)
    })
    const req = httptestingController.expectOne(host + "/products/" + product.id)
    req.flush(product)
    expect(req.request.method).toBe('GET')
  })
  it('return Selected Products', () => {
    let productArray = products.filter((p) => p.selected == true)
    productService.getSelectedProduct().subscribe((data) => {
      expect(data).toEqual(productArray)
    })
    const req = httptestingController.expectOne(host + "/products?selected=true")
    req.flush(productArray)
    expect(req.request.method).toBe('GET')

  })

  it('return Available Products', () => {
    let productArray = products.filter((p) => p.available == true)
    productService.getAvailableProduct().subscribe((data) => {
      expect(data).toEqual(productArray)
    })
    const req = httptestingController.expectOne(host + "/products?available=true")
    req.flush(productArray)
    expect(req.request.method).toBe('GET')

  })
it('should update selected attribute',()=>{
  let prod=products[3]
  let updatedProduct:Product={...prod,selected:!prod.selected}
  productService.selectedProduct(prod).subscribe((data) => {
    expect(data).toEqual(prod)
  })
  const req = httptestingController.expectOne(host + "/products/" + prod.id)
  req.flush(updatedProduct)
  expect(req.request.method).toBe('PUT')

})

})
