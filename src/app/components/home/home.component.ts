import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lastVideos: Video[] = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.retrieveLastVideos();
  }

  private async retrieveLastVideos(): Promise<void> {
    this.lastVideos = await this.api.getLast();
  }

}
