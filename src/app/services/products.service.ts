import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IProduct } from '../model/iProduct.model';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators'

//importar import { HttpClientModule } from '@angular/common/http' no app.module
//no app module importamos o HttpClientModule e no service importamos o HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // criar a variável que contem a info de url de onde o angular vai buscar as informações
  private URL: string = 'http://localhost:3001/products'

  constructor(private http: HttpClient, private toastr: ToastrService) { } //Para poder usar o "diretório" HttpClient como só http

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    )
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    )
  }

  //<IProduct[]> depois do observable temos que dizer pra ele qual é o tipo de variável que ele está esperando
  //foi criada uma interface dentro de model
  //passar tbm a interface depois do http.get 

  showMessage(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(titulo, mensagem, { closeButton: true, progressBar: true }, tipo);
  }

  showError(e: any): Observable<any> {
    this.showMessage("Não foi possível realizar essa ação", "ERRO!!", 'toast-error')
    return EMPTY;
  }

  newProduct(product: IProduct) {
    return this.http.post<IProduct>(this.URL, product).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    )
  }

  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.URL}/${product.id}`, product).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    )
  }
}
