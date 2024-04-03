import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDataComponent } from './cdr-data.component';

describe('CdrDataComponent', () => {
  let component: CdrDataComponent;
  let fixture: ComponentFixture<CdrDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdrDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdrDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
