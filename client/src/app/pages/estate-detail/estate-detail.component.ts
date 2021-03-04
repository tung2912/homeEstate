import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Estate} from '../../shared/models/estates.model';
import {EstateService} from '../../services/estate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../../shared/models/owner.model';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import { filter, pluck, tap } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubscribeService} from '../../services/subscribe.service';
import {City} from '../../shared/models/city.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Image} from '../../shared/models/image.model';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.scss']
})
export class EstateDetailComponent implements OnInit {
  formSubscribe: FormGroup;
  estate: Estate = null;
  owner: Owner;
  city: City = null;
  images: Image[] = [];

  constructor(config: NgbCarouselConfig,
              private estateService: EstateService,
              private route: ActivatedRoute,
              private Auth: AuthService,
              private formBuilder: FormBuilder,
              private subScribeService: SubscribeService,
              private router: Router) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  items = ['By proceeding, you consent to receive calls and texts at the number you provided, including marketing by autodialer and prerecorded and artificial voice, and email, from realtor.com and others about your inquiry and other home-related matters, but not as a condition of any purchase; this applies regardless of whether you check, or leave un-checked, any box above. You also agree to our Terms of Use, and to our Privacy Policy regarding the information relating to you. Msg/data rates may apply. This consent applies even if you are on a corporate, state or national Do Not Call list.'];
  ngOnInit(): void {
    const ownerStr = localStorage.getItem('owner');
    this.owner = ownerStr ? JSON.parse(ownerStr) : null;

    const id: number = +this.route.snapshot.paramMap.get('id');

    // @ts-ignore
    this.estate = {make: ''};

    this.estateService.getById(id).subscribe(
      (data: any) => {
        this.estate = data.estate;
        this.images = data.images;
      }
    );

    this.formSubscribe = this.formBuilder.group({
      owner_id: [null, [Validators.required]],
      estate_id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });

    this.Auth.owner$
    .pipe(
      filter(e => !!e))
    .subscribe(owner => {
      this.formSubscribe.patchValue({
        name: owner.name,
        email: owner.email,
        address: owner.address,
        phone: owner.phone
      });
    });
  }

  submitSubscribe(): void {
    if (this.owner) {
      this.formSubscribe.patchValue({
        owner_id: this.owner.id,
        estate_id: this.estate.id,
      });
      const subData = this.formSubscribe.value;
      this.subScribeService.subForOwner(subData).subscribe(
        res => {
          Swal.fire('Thank you...', 'Your subscribe posted succesfully!<br> We\'ll contact to you later', 'success');
          this.router.navigateByUrl('');
        }
      );
    }
    if (!this.owner) {
      this.formSubscribe.patchValue({
        estate_id: this.estate.id
      });
      const subData = this.formSubscribe.value;
      this.subScribeService.subForClient(subData).subscribe(
        res => {
          Swal.fire('Thank you...', 'Your subscribe posted succesfully!<br> We\'ll contact to you later', 'success');
          this.router.navigateByUrl('');
        }
      );
    }
  }


}
