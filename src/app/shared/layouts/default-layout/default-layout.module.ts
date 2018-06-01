import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DefaultLayoutComponent } from './default-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, DefaultLayoutComponent, HeaderComponent]
})
export class DefaultLayoutModule { }
