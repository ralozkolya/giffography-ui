import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  public model: Event = new Event(1, 'test 1', 2, null);e

  constructor() { }

  ngOnInit() {
  }

}
