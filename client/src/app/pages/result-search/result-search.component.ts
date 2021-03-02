import { Component, OnInit } from '@angular/core';
import {Estate} from '../../shared/models/estates.model';
import {EstateService} from '../../services/estate.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  listSearch: Estate[]  = [];
  countResult = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.listSearch = history.state.listSearch;
    this.listSearch = Object.values(this.listSearch || []);
    // console.log(this.listSearch.length);
    this.countResult = this.listSearch.length;
  }

}
