import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrDataComponent } from './sdr-data.component';

describe('SdrDataComponent', () => {
  let component: SdrDataComponent;
  let fixture: ComponentFixture<SdrDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdrDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdrDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
