import { Component, OnInit } from '@angular/core';
import {EstateService} from '../../../services/estate.service';
import {Estate} from '../../../shared/models/estates.model';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // tslint:disable-next-line:typedef
  searchValue = '';
  listSearch: Estate[] | any = [];
  constructor(private estateService: EstateService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  searchEstates() {
    this.estateService.getEstatesBySearch(this.searchValue).subscribe(
      data => {
        // @ts-ignore
        this.listSearch = data;
        // console.log(data);
        this.router.navigateByUrl('resultSearch', { state: this.listSearch});
      }
    );
  }
  ngOnInit(): void {
  }

}

