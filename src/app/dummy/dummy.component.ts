import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
