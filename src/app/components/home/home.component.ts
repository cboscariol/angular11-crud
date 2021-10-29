import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productName: string = 'Angular Course'
  ad: string
  productId: number
  price: number = 59.90
  sale: boolean = false
  image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8InvKO4fmYz4Yb-CNE6wEDxlLPkVMEjKEA&usqp=CAU'

  constructor() { }

  ngOnInit(): void {
  }

}
