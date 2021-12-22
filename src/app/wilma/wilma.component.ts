import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wilma',
  template: `
    <p>wilma works!</p>
    <span>Material Slider</span>
    <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
  `,
  styleUrls: ['./wilma.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WilmaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
