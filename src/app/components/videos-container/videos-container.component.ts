import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.scss']
})
export class VideosContainerComponent  {

  @Input()
  public videos: Video[];

}
