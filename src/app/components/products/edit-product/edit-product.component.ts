import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/iProduct.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct = {
    name: null,
    validade: null,
    price: null,
  }

  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    this.productService.getProductById(id).subscribe(retorno => {
      this.product = retorno
    })
  }

  saveProduct(): void {
    this.productService.editProduct(this.product).subscribe(retorno => {
      this.product = retorno;
      this.productService.showMessage(
        'SISTEMA',
        `${this.product.name} foi atualizado com sucesso!`,
        'toast-success'
      );
      this.router.navigate(['/products'])
    })
  }
}
