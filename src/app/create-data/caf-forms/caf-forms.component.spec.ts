import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafFormsComponent } from './caf-forms.component';

describe('CafFormsComponent', () => {
  let component: CafFormsComponent;
  let fixture: ComponentFixture<CafFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
