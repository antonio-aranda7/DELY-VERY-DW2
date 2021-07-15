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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardComponent, TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminModule { }
