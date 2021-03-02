import { Component, OnInit } from '@angular/core';
import {Blog} from '../../shared/models/blog.model';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute} from '@angular/router';
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-trend-page',
  templateUrl: './trend-page.component.html',
  styleUrls: ['./trend-page.component.scss']
})
export class TrendPageComponent implements OnInit {

  popularBlogs: Blog[] | any = [];

  constructor(private blogService: BlogService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.blogService.getPopularBlog().subscribe(
          data => this.popularBlogs = data
        );
  }

}
