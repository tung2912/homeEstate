import { Component, OnInit } from '@angular/core';
import {Blog} from '../../shared/models/blog.model';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {pluck, tap} from "rxjs/operators";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  public Editor = ClassicEditor;
  blog: Blog[] | any = [];
  popularBlogs: Blog[] | any = [];

  constructor(private blogService: BlogService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      pluck('id'))
      .subscribe((id: string) => {
        this.blogService.getById(id).subscribe(
          data => this.blog = data
        );
        this.blogService.getPopularBlog().subscribe(
          data => this.popularBlogs = data
        );
      });
  }

}
