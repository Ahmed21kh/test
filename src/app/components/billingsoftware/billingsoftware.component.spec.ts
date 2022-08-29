import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsoftwareComponent } from './billingsoftware.component';

describe('BillingsoftwareComponent', () => {
  let component: BillingsoftwareComponent;
  let fixture: ComponentFixture<BillingsoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingsoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
