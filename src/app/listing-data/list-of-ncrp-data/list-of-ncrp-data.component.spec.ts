import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNcrpDataComponent } from './list-of-ncrp-data.component';

describe('ListOfNcrpDataComponent', () => {
  let component: ListOfNcrpDataComponent;
  let fixture: ComponentFixture<ListOfNcrpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfNcrpDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfNcrpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
