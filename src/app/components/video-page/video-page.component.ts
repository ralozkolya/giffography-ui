import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';
import { Meta } from '@angular/platform-browser';

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
              private meta: Meta) {}

  ngOnInit() {
    this.retrieveVideo(this.route.snapshot.params.id);
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
