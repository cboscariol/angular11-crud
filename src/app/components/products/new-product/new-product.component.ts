import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/iProduct.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: IProduct = {
    name: null,
    validade: null,
    price: null,
  }

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    this.productService.newProduct(this.product).subscribe(retorno => {
      this.product = retorno;
      this.productService.showMessage(
        'SISTEMA',
        `${this.product.name} foi cadastrado com sucesso. ID ${this.product.id}`,
        'toast-success'
      );
      this.router.navigate(['/products'])
    })
  }

}
