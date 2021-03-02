import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightsBlogsComponent} from './highlights-blogs.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HighlightsBlogsComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    HighlightsBlogsComponent
  ]
})
export class HighlightsBlogsModule { }
