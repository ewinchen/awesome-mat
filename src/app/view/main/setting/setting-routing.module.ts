import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [
  {
    path: 'permission',
    component: PermissionComponent
  },
  {
    path: '',
    redirectTo: 'permission',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
