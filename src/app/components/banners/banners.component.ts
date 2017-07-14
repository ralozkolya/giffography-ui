import { Component, Input } from '@angular/core';
import { Banner } from '../../interfaces/banner';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {

  @Input()
  public banners: Banner[];

}
