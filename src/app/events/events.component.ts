import { Component, OnInit } from '@angular/core';
import { events } from '../events'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  events = events;
  constructor() {
  }

  ngOnInit() {
  }

}
