import { Component, OnInit } from '@angular/core';
import {Blog} from '../../shared/models/blog.model';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  allBlogs: Blog[] | any = [];
  popularBlogs: Blog[] | any = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(
      data => this.allBlogs = data
    );
    this.blogService.getPopularBlog().subscribe(
      data => this.popularBlogs = data
    );
  }

}
