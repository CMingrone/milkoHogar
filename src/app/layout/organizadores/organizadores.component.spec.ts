import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadoresComponent } from './organizadores.component';

describe('OrganizadoresComponent', () => {
  let component: OrganizadoresComponent;
  let fixture: ComponentFixture<OrganizadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizadoresComponent]
    });
    fixture = TestBed.createComponent(OrganizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
