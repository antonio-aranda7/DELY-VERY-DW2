import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import {} from './../material/material.module';
import { NavComponent} from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/table/table.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import {FormProductComponent} from './component/form-product/form-product.component';
<<<<<<< HEAD
=======
import { ProductEditComponent } from './component/product-edit/product-edit.component';
>>>>>>> parent of 005fb6c (Merge branch 'master' into JAAC)

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent,
      },
<<<<<<< HEAD
=======
      {
        path: 'products/edit/:id',
        component: ProductEditComponent,
      },
>>>>>>> parent of 005fb6c (Merge branch 'master' into JAAC)
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
