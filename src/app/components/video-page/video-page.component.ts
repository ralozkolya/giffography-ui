import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  public video: Video = null;
  public error: any = null;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.retrieveVideo(this.route.snapshot.params.id);
  }

  private async retrieveVideo(id): Promise<void> {
    try {
      this.video = await this.api.getVideo(id);
    } catch (e) {
      this.error = e;
    }
  }

}
