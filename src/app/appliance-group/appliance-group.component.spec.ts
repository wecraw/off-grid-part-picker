import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceGroupComponent } from './appliance-group.component';

describe('ApplianceGroupComponent', () => {
  let component: ApplianceGroupComponent;
  let fixture: ComponentFixture<ApplianceGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplianceGroupComponent]
    });
    fixture = TestBed.createComponent(ApplianceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
