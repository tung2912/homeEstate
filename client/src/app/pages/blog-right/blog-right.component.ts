import { Component, OnInit } from '@angular/core';
import {Blog} from '../../shared/models/blog.model';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-right',
  templateUrl: './blog-right.component.html',
  styleUrls: ['./blog-right.component.scss']
})
export class BlogRightComponent implements OnInit {

  popularBlogs: Blog[] | any = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getPopularBlog().subscribe(
      data => this.popularBlogs = data
    );
  }


}
