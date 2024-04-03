import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCafFormsDataComponent } from './list-of-caf-forms-data.component';

describe('ListOfCafFormsDataComponent', () => {
  let component: ListOfCafFormsDataComponent;
  let fixture: ComponentFixture<ListOfCafFormsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCafFormsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCafFormsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
