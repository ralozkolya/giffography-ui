import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { Video } from '../../interfaces/video';
import { Banner } from '../../interfaces/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public banners: Banner[] = null;
  public lastVideos: Video[] = null;

  constructor(private api: ApiService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Giffography.ge');
    this.retrieveLastVideos();
    this.retrieveBanners();
  }

  private async retrieveLastVideos(): Promise<void> {
    try {
      this.lastVideos = await this.api.getLast();
    } catch (e) {}
  }

  private async retrieveBanners(): Promise<void> {
    try {
      this.banners = await this.api.getBanners();
    } catch (e) {}
  }

}
