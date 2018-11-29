import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FsrSalesComponent } from './fsr-sales.component';

const routes: Routes = [
  {
    path: '',
    component: FsrSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FsrSalesRoutingModule { }
