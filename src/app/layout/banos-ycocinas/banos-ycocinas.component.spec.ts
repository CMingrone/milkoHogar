import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanosYCocinasComponent } from './banos-ycocinas.component';

describe('BanosYCocinasComponent', () => {
  let component: BanosYCocinasComponent;
  let fixture: ComponentFixture<BanosYCocinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanosYCocinasComponent]
    });
    fixture = TestBed.createComponent(BanosYCocinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
