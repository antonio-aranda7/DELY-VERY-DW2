import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import{MaterialModule}from './../material/material.module';
import { NavComponent } from './component/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './component/table/table.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { FormProductComponent } from './component/form-product/form-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
=======
import { ProductEditComponent } from './component/product-edit/product-edit.component';
>>>>>>> parent of 005fb6c (Merge branch 'master' into JAAC)

@NgModule({
  declarations: [
      ProductFormComponent, 
      NavComponent, 
      DashboardComponent, 
      TableComponent,
     ProductsListComponent,
     FormProductComponent,
<<<<<<< HEAD
=======
     ProductEditComponent,
>>>>>>> parent of 005fb6c (Merge branch 'master' into JAAC)
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ]
})
export class AdminModule { }
