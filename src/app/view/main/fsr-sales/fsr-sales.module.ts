import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsrSalesRoutingModule } from './fsr-sales-routing.module';
import { FsrSalesComponent } from './fsr-sales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FsrListComponent } from './fsr-list/fsr-list.component';
import { FsrHeaderComponent } from './fsr-header/fsr-header.component';
import { CustomerDialogComponent } from './fsr-header/customer-dialog/customer-dialog.component';

@NgModule({
  declarations: [FsrSalesComponent, FsrListComponent, FsrHeaderComponent, CustomerDialogComponent],
  imports: [
    CommonModule,
    FsrSalesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CustomerDialogComponent
  ]
})
export class FsrSalesModule { }
