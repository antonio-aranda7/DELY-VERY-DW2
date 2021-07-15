import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { NavComponent} from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/table/table.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
