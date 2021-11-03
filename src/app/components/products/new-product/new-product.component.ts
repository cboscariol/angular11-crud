import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productName: string
  validade: string
  price: string

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    console.log(this.productName)
  }

}
