import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog.model';
import {BlogService} from '../../../services/blog.service';

@Component({
  selector: 'app-highlights-blogs',
  templateUrl: './highlights-blogs.component.html',
  styleUrls: ['./highlights-blogs.component.scss']
})
export class HighlightsBlogsComponent implements OnInit {

  newBlog: Blog[] | any = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getNewBlog().subscribe(
      data => this.newBlog = data
    );
  }

}
