import { Component, OnInit } from '@angular/core';
import {Estate} from '../../shared/models/estates.model';
import {EstateService} from '../../services/estate.service';
import {City} from '../../shared/models/city.model';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss']
})
export class EstatesComponent implements OnInit {
  aroundMillionEstateList: Estate[]|any = [];
  newestEstatesList: Estate[]|any = [];
  affordableEstateList: Estate[]|any = [];
  luxuryEstateList: Estate[]|any = [];
  city: City[]|any = [];
  more1: boolean;
  more2: boolean;
  more3: boolean;
  more4: boolean;
  constructor(private estateService: EstateService) { }

  ngOnInit(): void {
    this.estateService.getAroundMillion().subscribe(
      data => this.aroundMillionEstateList = data
    );
    this.estateService.getNewest().subscribe(
      data => this.newestEstatesList = data
    );
    this.estateService.getAffordable().subscribe(
      data => this.affordableEstateList = data
    );
    this.estateService.getLuxury().subscribe(
      data => this.luxuryEstateList = data
    );
  }

}
