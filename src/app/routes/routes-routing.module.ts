import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../shared/layouts/default-layout/default-layout.component';
import { DefaultLayoutModule } from '../shared/layouts/default-layout/default-layout.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DefaultLayoutModule
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
