import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoPersonalComponent } from './cuidado-personal.component';

describe('CuidadoPersonalComponent', () => {
  let component: CuidadoPersonalComponent;
  let fixture: ComponentFixture<CuidadoPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuidadoPersonalComponent]
    });
    fixture = TestBed.createComponent(CuidadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
