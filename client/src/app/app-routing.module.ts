import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import {NavComponent} from './shared/nav/nav.component';
import {EstatesComponent} from './pages/estates/estates.component';
import {EstateDetailComponent} from './pages/estate-detail/estate-detail.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {SignupComponent} from './pages/signup/signup.component';
import {EstateAllComponent} from './pages/estate-all/estate-all.component';
import {PostEstateComponent} from  './pages/post-estate/post-estate.component';



const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'estatesList',
    loadChildren: () => import('./pages/estates/estates.module').then(m => m.EstatesModule)
  },
  {
    path: 'estateDetail/:id',
    component: EstateDetailComponent
  },
  {
    path: 'allEstate',
    component: EstateAllComponent},
  {
    path: 'postEstate',
    component: PostEstateComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
