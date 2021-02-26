import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-estate',
  templateUrl: './post-estate.component.html',
  styleUrls: ['./post-estate.component.scss']
})
export class PostEstateComponent implements OnInit {

  afuConfig = {
    uploadAPI: {
      url: 'https://example-file-upload-api'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
