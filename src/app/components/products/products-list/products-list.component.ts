import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  products: any[] = [
    { name: "Curso Angular", price: 35.50, validade: '2021-11-11', id: 1 },
    { name: "Curso React", price: 30.50, validade: '2021-11-11', id: 2 },
    { name: "Curso Vue", price: 40.50, validade: '2021-11-11', id: 3 },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
