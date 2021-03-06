import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HomeModule} from './pages/home/home.module';
import { EstateDetailComponent } from './pages/estate-detail/estate-detail.component';
// tslint:disable-next-line:import-spacing
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {AwesomeService} from './services/awesome.service';
import {TokenService} from './services/token.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import {EstateDetailModule} from './pages/estate-detail/estate-detail.module';
import { EstateFilterComponent } from './pages/estate-filter/estate-filter.component';
import { EstateAllComponent } from './pages/estate-all/estate-all.component';
import { PostEstateComponent } from './pages/post-estate/post-estate.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TrendPageComponent } from './pages/trend-page/trend-page.component';
import { BlogLeftComponent } from './pages/blog-left/blog-left.component';
import { BlogRightComponent } from './pages/blog-right/blog-right.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    EstateDetailComponent,
    ProfileComponent,
    SignupComponent,
    EstateFilterComponent,
    EstateAllComponent,
    PostEstateComponent,
    ResultSearchComponent,
    BlogsComponent,
    BlogDetailComponent,
    TrendPageComponent,
    BlogLeftComponent,
    BlogRightComponent,
    AboutUsComponent,
    PrivacyPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgBootstrapFormValidationModule.forRoot(),
        NgBootstrapFormValidationModule,
        FontAwesomeModule,
        EstateDetailModule,
        CKEditorModule
    ],
  providers: [
    AwesomeService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
