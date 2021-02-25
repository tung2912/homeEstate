import { Component, OnInit } from '@angular/core';
import {EstateService} from '../../services/estate.service';
import {Estate} from "../../shared/models/estates.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
