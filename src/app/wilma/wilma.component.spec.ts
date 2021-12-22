import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilmaComponent } from './wilma.component';

describe('WilmaComponent', () => {
  let component: WilmaComponent;
  let fixture: ComponentFixture<WilmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WilmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
