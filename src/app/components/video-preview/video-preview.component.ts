import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {

  @Input()
  public video: Video;

  public poster: string;
  public source: string;
  public mimetype: string;

  public ngOnInit(): void {
    this.poster = this.video.files.thumb.full_path;
    this.source = this.video.files.video.full_path;
    this.mimetype = this.video.files.video.mimetype;
  }

}
