import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberBullyComponent } from './cyber-bully.component';

describe('CyberBullyComponent', () => {
  let component: CyberBullyComponent;
  let fixture: ComponentFixture<CyberBullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberBullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberBullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
