import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCdrDataComponent } from './list-of-cdr-data.component';

describe('ListOfCdrDataComponent', () => {
  let component: ListOfCdrDataComponent;
  let fixture: ComponentFixture<ListOfCdrDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCdrDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCdrDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
