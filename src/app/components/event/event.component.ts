import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Video } from '../../interfaces/video';
import { PaginatedResponse } from '../../interfaces/paginated-response';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  public event: Event;

  public videos: PaginatedResponse<Video>;
  public loading = false;
  public error: any = null;

  constructor(private route: ActivatedRoute,
              private api: ApiService) { }

  ngOnInit() {
    this.retrieveEvent(this.route.snapshot.params.id);
    this.retrieveVideos(this.route.snapshot.params.id);
  }

  private async retrieveEvent(id: number): Promise<void> {
    this.loading = true;

    try {
      this.event = await this.api.getEvent(id);
    } catch (e) {
      this.error = e;
    }

    this.loading = false;
  }

  private async retrieveVideos(eventId: number): Promise<void> {
    this.loading = true;

    try {
      this.videos = await this.api.getVideos(eventId);
    } catch (e) {
      this.error = e;
    }

    this.loading = false;
  }

}
