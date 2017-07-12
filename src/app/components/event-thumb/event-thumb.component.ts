import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../interfaces/event';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-event-thumb',
  templateUrl: './event-thumb.component.html',
  styleUrls: ['./event-thumb.component.scss']
})
export class EventThumbComponent implements OnInit {

  @Input()
  public event: Event;

  public thumbUrl = 'https://placehold.it/500x500';
  public name: string;

  public constructor(private translate: TranslateService) {}

  public ngOnInit(): void {

    this.translate.onLangChange.subscribe(() => {
      this.assignName();
    });

    try {
      this.thumbUrl = this.event.thumbnail.full_path;
    } catch (e) {
      this.thumbUrl = '/assets/img/no-image.png';
    }

    this.assignName();
  }

  private assignName(): void {
    const lang = this.translate.currentLang;
    this.name = this.event[`${lang}_name`];
  }
}
