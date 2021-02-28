import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import {HomeComponent} from './home.component';
import {HighlightsBlogsModule} from '../../shared/components/highlights-blogs/highlights-blogs.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BannerComponent,
    EstatesListComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        HighlightsBlogsModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule { }
