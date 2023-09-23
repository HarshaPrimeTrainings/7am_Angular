import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentComponent } from './consignment.component';

describe('ConsignmentComponent', () => {
  let component: ConsignmentComponent;
  let fixture: ComponentFixture<ConsignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsignmentComponent]
    });
    fixture = TestBed.createComponent(ConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
