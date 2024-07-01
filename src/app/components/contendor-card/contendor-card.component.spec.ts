import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendorCardComponent } from './contendor-card.component';

describe('ContendorCardComponent', () => {
  let component: ContendorCardComponent;
  let fixture: ComponentFixture<ContendorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContendorCardComponent]
    });
    fixture = TestBed.createComponent(ContendorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
