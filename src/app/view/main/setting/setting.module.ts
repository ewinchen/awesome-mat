import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { PermissionComponent } from './permission/permission.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PermissionComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
