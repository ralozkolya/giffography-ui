import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-thumb',
  templateUrl: './event-thumb.component.html',
  styleUrls: ['./event-thumb.component.scss']
})
export class EventThumbComponent {

  @Input()
  public thumbUrl = 'https://placehold.it/500x500';

  @Input()
  public name: string;

}
