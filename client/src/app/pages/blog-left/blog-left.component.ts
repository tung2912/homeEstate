import { Component, OnInit } from '@angular/core';
import {Blog} from '../../shared/models/blog.model';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-left',
  templateUrl: './blog-left.component.html',
  styleUrls: ['./blog-left.component.scss']
})
export class BlogLeftComponent implements OnInit {

  popularBlogs: Blog[] | any = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getPopularBlog().subscribe(
      data => this.popularBlogs = data
    );
  }

}
