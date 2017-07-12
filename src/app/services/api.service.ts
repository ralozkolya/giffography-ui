import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { PaginatedResponse } from '../interfaces/paginated-response';
import { Event } from '../interfaces/event';
import { Video } from '../interfaces/video';
import { Page } from '../interfaces/page';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  private events = null;
  private lastVideos = null;

  private baseUrl = environment.apiUrl;
  private eventsUrl = `${this.baseUrl}/events`;
  private eventUrl = `${this.baseUrl}/events/:id`;
  private lastVideosUrl = `${this.baseUrl}/videos/last`;
  private videosUrl = `${this.baseUrl}/events/:id/videos`;
  private videoUrl = `${this.baseUrl}/videos/:id`;

  constructor(private http: Http) { }

  public async getEvents(page: number = 1): Promise<PaginatedResponse<Event>> {

    if (this.events) {
      return Promise.resolve(this.events);
    }

    const params: URLSearchParams = new URLSearchParams();
    params.set('page', page.toString());

    return await this.http.get(this.eventsUrl, {
      search: params.toString()
    }).map(res => res.json()).toPromise();
  }

  public async getEvent(id: number): Promise<Event> {
    const url = this.eventUrl.replace(':id', id.toString());
    return await this.http.get(url).map(res => res.json()).toPromise();
  }

  public async getLast(): Promise<Video[]> {

    if (this.lastVideos) {
      return Promise.resolve(this.lastVideos);
    }

    return await this.http.get(this.lastVideosUrl).map(res => res.json()).toPromise();
  }

  public async getVideos(eventId: number = null): Promise<PaginatedResponse<Video>> {
    const url = this.videosUrl.replace(':id', eventId.toString());
    return await this.http.get(url).map(res => res.json()).toPromise();
  }


  public async getVideo(id: number): Promise<Video> {
    const url = this.videoUrl.replace(':id', id.toString());
    return await this.http.get(url).map(res => res.json()).toPromise();
  }

  public async loadPage(path: string): Promise<Page> {
    return Promise.resolve({title: 'test', body: '<h2>Test</h2>'});
  }

}
