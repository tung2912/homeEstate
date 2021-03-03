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
// tslint:disable-next-line:import-spacing
import {PostEstateComponent} from  './pages/post-estate/post-estate.component';
// tslint:disable-next-line:import-spacing
import {ResultSearchComponent} from  './pages/result-search/result-search.component';
import {BlogsComponent} from './pages/blogs/blogs.component';
import {BlogDetailComponent} from './pages/blog-detail/blog-detail.component';
import {TrendPageComponent} from './pages/trend-page/trend-page.component';
import {BlogLeftComponent} from './pages/blog-left/blog-left.component';
import {BlogRightComponent} from './pages/blog-right/blog-right.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PrivacyPageComponent} from './pages/privacy-page/privacy-page.component';


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
  },
  {
    path: 'resultSearch',
    component: ResultSearchComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogDetail/:id',
    component: BlogDetailComponent
  },
  {
    path: 'trend',
    component: TrendPageComponent
  },
  {
    path: 'financePage/1',
    component: BlogLeftComponent
  },
  {
    path: 'financePage/2',
    component: BlogRightComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'PrivacyPolicy',
    component: PrivacyPageComponent
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
