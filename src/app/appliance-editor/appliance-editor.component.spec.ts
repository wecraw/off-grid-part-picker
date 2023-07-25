import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceEditorComponent } from './appliance-editor.component';

describe('ApplianceEditorComponent', () => {
  let component: ApplianceEditorComponent;
  let fixture: ComponentFixture<ApplianceEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplianceEditorComponent]
    });
    fixture = TestBed.createComponent(ApplianceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
