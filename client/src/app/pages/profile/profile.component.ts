import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../shared/models/owner.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {OwnerService} from '../../services/owner.service';
import {Estate} from '../../shared/models/estates.model';
import {Subscribe} from '../../shared/models/subscribe.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  owner: Owner;
  EstatesofOwners: Estate[] = [];
  SubByOwners: Subscribe[] = [];

  constructor(private auth: AuthService,
              private router: Router,
              private ownerService: OwnerService
              ) { }

  ngOnInit(): void {
    this.auth.owner$.subscribe(owner => this.owner = owner);
    console.log(this.owner);

    this.ownerService.getOwnerInfo(this.owner.id).subscribe(
      (res: any) => {
        this.EstatesofOwners = res.EstatesofOwners;
        this.SubByOwners = res.SubByOwners;
      }
    );
  }

  backToHome(): void {
    this.router.navigateByUrl('');
  }

}
