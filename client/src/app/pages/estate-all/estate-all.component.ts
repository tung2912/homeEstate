import { Component, OnInit } from '@angular/core';
import {EstateService} from '../../services/estate.service';
import {Estate} from '../../shared/models/estates.model';

@Component({
  selector: 'app-estate-all',
  templateUrl: './estate-all.component.html',
  styleUrls: ['./estate-all.component.scss']
})
export class EstateAllComponent implements OnInit {
  ListEstate: Estate[]|any = [];

  constructor(private estateService: EstateService) { }

  ngOnInit(): void {
    this.estateService.getNewest().subscribe(
      data => this.ListEstate = data
    );
  }

}
