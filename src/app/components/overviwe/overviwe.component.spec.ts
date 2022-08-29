import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviweComponent } from './overviwe.component';

describe('OverviweComponent', () => {
  let component: OverviweComponent;
  let fixture: ComponentFixture<OverviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
