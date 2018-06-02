import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YarnPurchaseInComponent } from './yarn-purchase-in/yarn-purchase-in.component';

const routes: Routes = [
  {
    path: 'in',
    component: YarnPurchaseInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YarnRoutingModule { }
