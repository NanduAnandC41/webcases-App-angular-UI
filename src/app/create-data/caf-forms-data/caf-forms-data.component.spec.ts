import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafFormsDataComponent } from './caf-forms-data.component';

describe('CafFormsDataComponent', () => {
  let component: CafFormsDataComponent;
  let fixture: ComponentFixture<CafFormsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafFormsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafFormsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
