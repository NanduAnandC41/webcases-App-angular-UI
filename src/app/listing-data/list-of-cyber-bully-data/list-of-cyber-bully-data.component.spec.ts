import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCyberBullyDataComponent } from './list-of-cyber-bully-data.component';

describe('ListOfCyberBullyDataComponent', () => {
  let component: ListOfCyberBullyDataComponent;
  let fixture: ComponentFixture<ListOfCyberBullyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCyberBullyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCyberBullyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
