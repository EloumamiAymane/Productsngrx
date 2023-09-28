import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing"
import { ProductsComponent } from "./products.component"
import { ProductService } from "src/app/services/products.service"
import { FormBuilder, ReactiveFormsModule } from "@angular/forms"
import { Product } from "src/app/model/product.model"
import { of, take, throwError } from "rxjs"
import { ActionEvent, ActionEventProduct, DataStateEnum } from "src/app/state/product.state"
import { Router } from "@angular/router"
import { AppRoutingModule } from "src/app/app-routing.module"
import { By } from "@angular/platform-browser"
import { ProductsNavbarComponent } from "./products-navbar/products-navbar.component"

describe('products Components Testing', () => {
  let mockProductService: any
  let productComponent: ProductsComponent
  let fixture: ComponentFixture<ProductsComponent>
  let products: Product[]
  let mockRouter: any
  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(AppRoutingModule, ['navigateByUrl'])
    mockProductService = jasmine.createSpyObj(ProductService, ['getAllProduct',
      'deleteProduct', 'addProduct', 'getProduct', 'UpdateProduct', 'SearchProduct',
      'getSelectedProduct', 'getAvailableProduct', 'selectedProduct'])
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [ReactiveFormsModule,],
      providers: [FormBuilder, {
        provide: ProductService,
        useValue: mockProductService,

      }, {
          provide: Router,
          useValue: mockRouter
        }]
    })
    fixture = TestBed.createComponent(ProductsComponent)
    productComponent = fixture.componentInstance
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
    fixture.detectChanges();
  })

  it('should create Productscomponent', () => {
    expect(productComponent).toBeTruthy()
  })


  it('should return error  for product error ', () => {
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    let errorMessage = "Api Error"
    mockProductService.getAllProduct.and.returnValue(throwError({ message: errorMessage }));
    productComponent.onGetAllProduct()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getAllProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.errorMessage).toEqual(errorMessage)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(2)
      })

  })
  it('should load    product  ', () => {
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    let errorMessage = "Api Error"
    mockProductService.getAllProduct.and.returnValue(of(products));
    productComponent.onGetAllProduct()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getAllProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.data).toEqual(products)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(1)
      })

  })

  it('should return error  for selected product error ', () => {
    let errorMessage = "Api Error"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.getSelectedProduct.and.returnValue(throwError({ message: errorMessage }));
    productComponent.onSelected()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getSelectedProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {
        expect(data.errorMessage).toEqual(errorMessage)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(2)
      })

  })
  it('should load selected   product  ', () => {
    let errorMessage = "Api Error"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.getSelectedProduct.and.returnValue(of(products));
    productComponent.onSelected()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getSelectedProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.data).toEqual(products)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(1)
      })

  })

  it('should load Available   product  ', () => {
    let errorMessage = "Api Error"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.getAvailableProduct.and.returnValue(of(products));
    productComponent.onAvailable()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getAvailableProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.data).toEqual(products)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(1)
      })

  })

  it('should raise error on  Available   product  ', () => {
    let errorMessage = "Api Error"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.getAvailableProduct.and.returnValue(throwError({ message: errorMessage }));
    productComponent.onAvailable()

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.getAvailableProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.errorMessage).toEqual(errorMessage)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(2)
      })

  })
  it('should raise error on  Serach   product  ', () => {
    let errorMessage = "Api Error"
    let keyword: any = "p"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.SearchProduct.and.returnValue(throwError({ message: errorMessage }));
    productComponent.onSearch(keyword)

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.SearchProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.errorMessage).toEqual(errorMessage)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(2)
      })

  })
  it('should get Serach products  ', () => {
    let keyword: any = "p"
    //b7ala ktgol rah service raja3 lik had les produits mn la base
    mockProductService.SearchProduct.and.returnValue(of(products));
    productComponent.onSearch(keyword)

    expect(productComponent.products$).toBeDefined()
    expect(productComponent.products$?.subscribe).toBeDefined()
    expect(mockProductService.SearchProduct).toHaveBeenCalledTimes(1)
    productComponent.products$?.
      subscribe((data) => {

        expect(data.data).toEqual(products)
        //2 is dataState.ERROR
        expect(data.dataState).toEqual(1)
      })

  })
  it('test route on OnSaveProduct method', () => {
    productComponent.onSaveProduct()
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith("/newProduct")
  })
  it('test route on OnUpdateProduct method', () => {
    let p: Product = products[0]
    productComponent.onUpdate(p)
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith("/editProduct/" + p.id)
  })

  it('Delete product test', () => {
    const product = products[0];
    //regarde popup et return value true
    //b7ala kn9ldo l user behavior diali

    spyOn(window, 'confirm').and.returnValue(true);
    //we do that for know id deleteMethode call also onGetAllProduct methode
    spyOn(productComponent, 'onGetAllProduct');
    //that return void we should do it
    mockProductService.deleteProduct.and.returnValue(of(null));

    // Act
    productComponent.onDelete(product);

    // Assert

    expect(window.confirm).toHaveBeenCalledWith("Etes vous sur de vouloir supprimer?");
    expect(mockProductService.deleteProduct).toHaveBeenCalledWith(product);
    expect(productComponent.onGetAllProduct).toHaveBeenCalled()
  })
  it('selected product update', () => {
    let p: Product = {
      id: 1,
      name: "Pc",
      price: 3000,
      quantity: 365,
      selected: false,
      available: true
    };
    let uodatedSelected: Product = {
      id: 1,
      name: "Pc",
      price: 3000,
      quantity: 365,
      selected: true,
      available: true
    }
    mockProductService.selectedProduct.and.returnValue(of(uodatedSelected));

    productComponent.selected(p)

    expect(mockProductService.selectedProduct).toHaveBeenCalled();
    expect(mockProductService.selectedProduct).toHaveBeenCalledWith(p);
  })

  it('should call onGetAllProduct for GET_ALL_PRODUCTS action', () => {
    // Arrange
    const event = { type: ActionEventProduct.GET_ALL_PRODUCTS };

    // Spy on the method to be called
    spyOn(productComponent, 'onGetAllProduct');

    // Act
    productComponent.onAction(event);

    // Assert
    expect(productComponent.onGetAllProduct).toHaveBeenCalled();
  });
  it('should call GET_AVAILABLE_PRODUCTS action', () => {
    // Arrange
    const event = { type: ActionEventProduct.GET_AVAILABLE_PRODUCTS };

    // Spy on the method to be called
    spyOn(productComponent, 'onAvailable');

    // Act
    productComponent.onAction(event);

    // Assert
    expect(productComponent.onAvailable).toHaveBeenCalled();
  });
  it('should call GET_SELECTED_PRODUCTS action', () => {
    let event = { type: ActionEventProduct.GET_SELECTED_PRODUCTS }
    spyOn(productComponent, "onSelected")
    productComponent.onAction(event);
    expect(productComponent.onSelected).toHaveBeenCalled()
  })
  it('should call GET_SEARCH_PRODUCTS action', () => {
    let event = { type: ActionEventProduct.SEARCH_PRODUCTS, payload: 'p' }
    spyOn(productComponent, "onSearch")
    productComponent.onAction(event);
    expect(productComponent.onSearch).toHaveBeenCalledWith(event.payload)
  })

  it('should call EDIT_PRODUCTS action', () => {
    let p: Product = products[0]
    let event = { type: ActionEventProduct.EDIT_PRODUCTS, payload: p }
    spyOn(productComponent, "onUpdate")
    productComponent.onAction(event);
    expect(productComponent.onUpdate).toHaveBeenCalledWith(event.payload)
  })

  it('should call DELETE_PRODUCTS action', () => {
    let p: Product = products[0]
    let event = { type: ActionEventProduct.DELETE_PRODUCTS, payload: p }
    spyOn(productComponent, "onDelete")
    productComponent.onAction(event);
    expect(productComponent.onDelete).toHaveBeenCalledWith(event.payload)
  })


  it('should call SELECT_PRODUCT action', () => {
    let p: Product = products[0]
    let event = { type: ActionEventProduct.SELECT_PRODUCT, payload: p }
    spyOn(productComponent, "selected")
    productComponent.onAction(event);
    expect(productComponent.selected).toHaveBeenCalledWith(event.payload)
  })
  it('should call NEW_PRODUCTS action', () => {
    let p: Product = products[0]
    let event = { type: ActionEventProduct.NEW_PRODUCTS }
    spyOn(productComponent, "onSaveProduct")
    productComponent.onAction(event);
    expect(productComponent.onSaveProduct).toHaveBeenCalled()
  })
  it('should handle ProducteventEmitter from child components', () => {


    spyOn(productComponent, 'onAction');

    // Simulate event emissions from child components
    const navbarComponent = fixture.debugElement.query(By.directive(ProductsNavbarComponent)).componentInstance;
    navbarComponent.ProducteventEmitter.emit({ type: ActionEventProduct.GET_ALL_PRODUCTS });

    // Perform assertions based on the parent component's behavior
    expect(productComponent.onAction).toHaveBeenCalledWith({ type: ActionEventProduct.GET_ALL_PRODUCTS });
  });

})



