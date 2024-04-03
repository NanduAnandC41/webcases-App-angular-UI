import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSdrDataComponent } from './list-of-sdr-data.component';

describe('ListOfSdrDataComponent', () => {
  let component: ListOfSdrDataComponent;
  let fixture: ComponentFixture<ListOfSdrDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSdrDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSdrDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
