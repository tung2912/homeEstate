import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Estate} from '../../shared/models/estates.model';
import {EstateService} from '../../services/estate.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.scss']
})
export class EstateDetailComponent implements OnInit {

  estate: Estate = null;

  constructor(config: NgbCarouselConfig,
              private estateService: EstateService,
              private route: ActivatedRoute) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  items = ['By proceeding, you consent to receive calls and texts at the number you provided, including marketing by autodialer and prerecorded and artificial voice, and email, from realtor.com and others about your inquiry and other home-related matters, but not as a condition of any purchase; this applies regardless of whether you check, or leave un-checked, any box above. You also agree to our Terms of Use, and to our Privacy Policy regarding the information relating to you. Msg/data rates may apply. This consent applies even if you are on a corporate, state or national Do Not Call list.'];
  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.estateService.getById(id).subscribe(
      (data: any) => {
        this.estate = data;
      }
    );
  }
}
