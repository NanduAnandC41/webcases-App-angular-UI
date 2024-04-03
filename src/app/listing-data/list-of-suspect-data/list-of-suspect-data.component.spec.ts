import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSuspectDataComponent } from './list-of-suspect-data.component';

describe('ListOfSuspectDataComponent', () => {
  let component: ListOfSuspectDataComponent;
  let fixture: ComponentFixture<ListOfSuspectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSuspectDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSuspectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
