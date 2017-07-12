import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Video } from '../../interfaces/video';
import { PaginatedResponse } from '../../interfaces/paginated-response';
import { Event } from '../../interfaces/event';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  public event: Event;

  public name: string;

  public videos: PaginatedResponse<Video>;
  public loading = false;
  public error: any = null;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private translate: TranslateService) { }

  public async ngOnInit() {

    this.translate.onLangChange.subscribe(() => {
      this.assignName();
    });

    this.loading = true;
    await this.retrieveEvent(this.route.snapshot.params.id);
    await this.retrieveVideos(this.route.snapshot.params.id);
    this.loading = false;
  }

  public isEmpty(): boolean {
    const v = this.videos;
    return !(v && v.data && v.data.length);
  }

  private async retrieveEvent(id: number): Promise<void> {
    try {
      this.event = await this.api.getEvent(id);
      this.assignName();
    } catch (e) {
      this.error = e;
    }
  }

  private async retrieveVideos(eventId: number): Promise<void> {
    try {
      this.videos = await this.api.getVideos(eventId);
    } catch (e) {
      this.error = e;
    }
  }

  private assignName(): void {
    const lang = this.translate.currentLang;
    this.name = this.event[`${lang}_name`];
  }

}
