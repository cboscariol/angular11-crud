import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/iProduct.model';

//importar import { HttpClientModule } from '@angular/common/http' no app.module
//no app module importamos o HttpClientModule e no service importamos o HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // criar a variável que contem a info de url de onde o angular vai buscar as informações
  private URL: string = 'http://localhost:3001/products'

  constructor(private http: HttpClient) { } //Para poder usar o "diretório" HttpClient como só http

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL)
  }

  //<IProduct[]> depois do observable temos que dizer pra ele qual é o tipo de variável que ele está esperando
  //foi criada uma interface dentro de model
  //passar tbm a interface depois do http.get 
}
