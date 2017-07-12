import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('video')
  private videoElement: any;

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

  public play(): void {
    this.videoElement.nativeElement.play();
  }

  public pause(): void {
    this.videoElement.nativeElement.pause();
  }

}
