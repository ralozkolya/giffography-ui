import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ng2-facebook-sdk';

import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';
import { Meta } from '@angular/platform-browser';
import { FacebookInitParamsService } from '../../services/facebook-init-params.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  public video: Video = null;
  public error: any = null;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private meta: Meta,
              private facebook: FacebookService,
              private fbParams: FacebookInitParamsService) {}

  public ngOnInit() {
    this.retrieveVideo(this.route.snapshot.params.id);
  }

  public async share(): Promise<void> {

    await this.facebook.init(this.fbParams.params);

    try {
      await this.facebook.ui({
        method: 'share',
        href: `https://api.giffography.ge/redirect/videos/${this.video.id}`,
      });
    } catch (e) {
      // Probably just cancelled
    }
  }

  private async retrieveVideo(id): Promise<void> {
    try {
      this.video = await this.api.getVideo(id);
      this.meta.addTags([
        {name: 'og:url', content: location.href},
        {name: 'og:type', content: 'website'},
        {name: 'og:title', content: 'Giffography.ge'},
        {name: 'og:image', content: this.video.files.thumb.full_path},
        {name: 'og:video', content: this.video.files.video.full_path},
        {name: 'og:video:secure_video', content: this.video.files.video.full_path},
        {name: 'og:video:type', content: 'video/mp4'},
      ]);
    } catch (e) {
      this.error = e;
    }
  }

}
