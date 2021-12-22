import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fred',
  templateUrl: './fred.component.html',
  styleUrls: ['./fred.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
