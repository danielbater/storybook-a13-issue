import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-barney',
  templateUrl: './barney.component.html',
  styleUrls: ['./barney.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
