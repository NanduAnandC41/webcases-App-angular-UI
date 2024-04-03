import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcrpDataComponent } from './ncrp-data.component';

describe('NcrpDataComponent', () => {
  let component: NcrpDataComponent;
  let fixture: ComponentFixture<NcrpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcrpDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcrpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
