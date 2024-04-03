import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSuspectAcDetialsComponent } from './list-of-suspect-ac-detials.component';

describe('ListOfSuspectAcDetialsComponent', () => {
  let component: ListOfSuspectAcDetialsComponent;
  let fixture: ComponentFixture<ListOfSuspectAcDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSuspectAcDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSuspectAcDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
