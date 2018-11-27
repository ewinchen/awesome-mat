import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DefaultLayoutComponent } from './default-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [FooterComponent, DefaultLayoutComponent, HeaderComponent, SidenavComponent]
})
export class DefaultLayoutModule { }
