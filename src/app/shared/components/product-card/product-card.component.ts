import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() image: string
  @Input() productName: string
  @Input() productId: string
  @Input() price: string
  @Input() sale: boolean

  // input =  as variáveis que o componente vai receber (ex. as infos que estão com interpolação no html)

  constructor() { }

  ngOnInit(): void {
  }

}
