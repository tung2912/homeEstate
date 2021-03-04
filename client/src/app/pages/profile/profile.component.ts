import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../shared/models/owner.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {OwnerService} from '../../services/owner.service';
import {Estate} from '../../shared/models/estates.model';
import {Subscribe} from '../../shared/models/subscribe.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  owner: Owner;
  closeResult = '';
  EstatesOfOwners: Estate[] = [];
  EstateSubByOwners: Estate[] = [];

  constructor(private auth: AuthService,
              private router: Router,
              private ownerService: OwnerService,
              private modalService: NgbModal
              ) { }

  ngOnInit(): void {
    this.auth.owner$.subscribe(owner => this.owner = owner);

    this.ownerService.getOwnerInfo(this.owner.id).subscribe(
      (res: any) => {
        this.EstatesOfOwners = res.EstatesOfOwners;
        this.EstateSubByOwners = res.EstateSubByOwners;
      }
    );
  }


  backToHome(): void {
    this.router.navigateByUrl('');
  }

  open(content) {
    this.modalService.open(content, {
      size: 's',
      ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDetails(targetModal, estate: Estate) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 's'
   });
    document.getElementById('address').innerHTML=estate.address;
    document.getElementById('price').innerHTML=String(estate.price);
    document.getElementById('floor_space').innerHTML=String(estate.floor_space);
    document.getElementById('bedroom_nums').innerHTML=String(estate.bedroom_nums);
    document.getElementById('bathroom_nums').innerHTML=String(estate.bathroom_nums);
    document.getElementById('garage_nums').innerHTML=String(estate.garage_nums);
 }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
