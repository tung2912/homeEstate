import { Component, OnInit } from '@angular/core';
import {Estate} from '../../../shared/models/estates.model';
import {EstateService} from '../../../services/estate.service';

@Component({
  selector: 'app-estates-list',
  templateUrl: './estates-list.component.html',
  styleUrls: ['./estates-list.component.scss']
})
export class EstatesListComponent implements OnInit {

  estatesList: Estate[]|any = [];

  constructor(private estateService: EstateService) { }

  ngOnInit(): void {
    this.estateService.getAll().subscribe(
      res => {
        this.estatesList = res;
      }
    );
  }

}
