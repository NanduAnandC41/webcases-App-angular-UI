import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectAccDataComponent } from './suspect-acc-data.component';

describe('SuspectAccDataComponent', () => {
  let component: SuspectAccDataComponent;
  let fixture: ComponentFixture<SuspectAccDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectAccDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspectAccDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
