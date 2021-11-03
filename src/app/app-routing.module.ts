import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/new-product', component: NewProductComponent },
  { path: 'products/edit-product/:id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
