import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  @ViewChild('video')
  private video: any;

  @Input()
  public poster: string;

  @Input()
  public source: string;

  @Input()
  public mimetype: string;

  public play(): void {
    this.video.nativeElement.play();
  }

  public pause(): void {
    this.video.nativeElement.pause();
  }

}
