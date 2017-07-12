import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {

  @ViewChild('video')
  public videoElement: any;

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

  public play() {
    this.videoElement.nativeElement.play();
  }

}
