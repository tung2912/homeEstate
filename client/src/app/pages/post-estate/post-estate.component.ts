import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Owner} from '../../shared/models/owner.model';
import {CityService} from '../../services/city.service';
import {City} from '../../shared/models/city.model';
import {EstateService} from '../../services/estate.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-estate',
  templateUrl: './post-estate.component.html',
  styleUrls: ['./post-estate.component.scss']
})
export class PostEstateComponent implements OnInit {
  formPostEstate: FormGroup;
  owner: Owner;
  cities: City[]|null = [];
  image1: File = null;

  constructor(private formBuilder: FormBuilder,
              private cityService: CityService,
              private estateService: EstateService,
              private router: Router) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(
      (res: any) => {
        this.cities = res;
      }
    );
    const ownerStr = localStorage.getItem('owner');
    this.owner = ownerStr ? JSON.parse(ownerStr) : null;
    this.formPostEstate = this.formBuilder.group({
      address: [null, [Validators.required]],
      city_id: [null, [Validators.required]],
      price: [null, [Validators.required]],
      floor_space: [null, [Validators.required]],
      bathroom_nums: [null, [Validators.required]],
      bedroom_nums: [null, [Validators.required]],
      garage_nums: [null, [Validators.required]],
      description: [null, [Validators.required]],
      owner_id: [this.owner.id, [Validators.required]],
      image1: [''],
      image2: [''],
      image3: ['']
    });
  }

  onImg1Select(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formPostEstate.get('image1').setValue(file);
      // console.log(this.formPostEstate.value);
    }

  }

  onImg2Select(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formPostEstate.get('image2').setValue(file);
      // console.log(this.formPostEstate.value);
    }

  }

  onImg3Select(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formPostEstate.get('image3').setValue(file);
      // console.log(this.formPostEstate.value);
    }

  }

  submitPostEstate(): void {
    // console.log(this.formPostEstate.get('image1').value);
    const formData = new FormData();
    formData.append('image1', this.formPostEstate.get('image1').value);
    formData.append('image2', this.formPostEstate.get('image2').value);
    formData.append('image3', this.formPostEstate.get('image3').value);
    formData.append('address', this.formPostEstate.get('address').value);
    formData.append('city_id', this.formPostEstate.get('city_id').value);
    formData.append('price', this.formPostEstate.get('price').value);
    formData.append('floor_space', this.formPostEstate.get('floor_space').value);
    formData.append('bathroom_nums', this.formPostEstate.get('bathroom_nums').value);
    formData.append('bedroom_nums', this.formPostEstate.get('bedroom_nums').value);
    formData.append('garage_nums', this.formPostEstate.get('garage_nums').value);
    formData.append('description', this.formPostEstate.get('description').value);
    formData.append('owner_id', this.formPostEstate.get('owner_id').value);

    // const formPostEstateValue = this.formPostEstate.value;
    // const formData = new FormData();
    // for (let i = 0; i < formPostEstateValue.length; i++) {
    //   for (const key of formPostEstateValue) {
    //     formData.append(key, formPostEstateValue[key]);
    //   }
    // }

    this.estateService.postEstate(formData).subscribe(
      res => {
        Swal.fire('Thank you...', 'Your estate posted succesfully!<br> We\'ll check it later', 'success');
        this.router.navigateByUrl('');
      }
    );
  }

}
