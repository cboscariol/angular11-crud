import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iProduct.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  products: IProduct[] = []
  //products é a variável que está sendo usada no *ngFor




  //importar o service de onde está vindo as informações do backend
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
  }


  loadProducts(): void {
    this.productService.getAllProducts().subscribe(products =>
      //getAllProducts está vindo do productService que é = ProductsService
      this.products = products
    )
  }
  //o subscribe é responsável por ativar o observable



}
