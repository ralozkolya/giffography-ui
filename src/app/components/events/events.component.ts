import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { Event } from '../../interfaces/event';
import { PaginatedResponse } from '../../interfaces/paginated-response';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events: PaginatedResponse<Event>;
  public error = null;
  public loading = false;

  constructor(private api: ApiService,
              private title: Title,
              private translate: TranslateService) { }

  public ngOnInit(): void {
    this.translate.get('events').subscribe(title => this.title.setTitle(title + ' | Giffography.ge'));
    this.retrieveEvents();
  }

  public changePage(e): void {
    this.retrieveEvents(e);
  }

  private async retrieveEvents(page: number = 1): Promise<void> {

    this.loading = true;

    try {
      this.events = await this.api.getEvents(page);
    } catch (e) {
      this.error = e;
    }

    this.loading = false;
  }

}
