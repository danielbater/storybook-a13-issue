import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarneyComponent } from './barney.component';

describe('BarneyComponent', () => {
  let component: BarneyComponent;
  let fixture: ComponentFixture<BarneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
