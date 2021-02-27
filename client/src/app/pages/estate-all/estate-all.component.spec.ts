import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateAllComponent } from './estate-all.component';

describe('EstateAllComponent', () => {
  let component: EstateAllComponent;
  let fixture: ComponentFixture<EstateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
