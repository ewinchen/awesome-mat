import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YarnRoutingModule } from './yarn-routing.module';
import { YarnPurchaseInComponent } from './yarn-purchase-in/yarn-purchase-in.component';

@NgModule({
  imports: [
    CommonModule,
    YarnRoutingModule
  ],
  declarations: [YarnPurchaseInComponent]
})
export class YarnModule { }
