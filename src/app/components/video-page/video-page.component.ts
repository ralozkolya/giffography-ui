import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ng2-facebook-sdk';
import { TranslateService } from '@ngx-translate/core';

import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';
import { FacebookInitParamsService } from '../../services/facebook-init-params.service';
import { Event } from '../../interfaces/event';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  public name: string;
  public video: Video = null;
  public event: Event = null;
  public error: any = null;

  public url: string;
  public copied = false;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private translate: TranslateService,
              private facebook: FacebookService,
              private fbParams: FacebookInitParamsService) {}

  public ngOnInit() {

    this.translate.onLangChange.subscribe(() => {
      this.assignName();
    });

    this.retrieveVideo(this.route.snapshot.params.id);
  }

  public async share(): Promise<void> {

    await this.facebook.init(this.fbParams.params);

    try {
      await this.facebook.ui({
        method: 'share',
        href: this.url,
      });
    } catch (e) {
      // Probably just cancelled
    }
  }

  private async retrieveVideo(id): Promise<void> {
    try {
      this.video = await this.api.getVideo(id);
      this.url = `${environment.apiUrl}redirect/videos/${this.video.id}`;
      this.event = await this.api.getEvent(this.video.event);
      this.assignName();
    } catch (e) {
      this.error = e;
    }
  }

  private assignName(): void {
    const lang = this.translate.currentLang;
    this.name = this.event[`${lang}_name`];
  }

}
