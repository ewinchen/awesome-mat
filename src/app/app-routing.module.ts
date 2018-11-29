import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { SignInComponent } from './view/sign/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './view/main/main.module#MainModule'
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
