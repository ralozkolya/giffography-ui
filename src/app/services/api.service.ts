import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { PaginatedResponse } from '../interfaces/paginated-response';
import { Event } from '../interfaces/event';
import { Video } from '../interfaces/video';
import { Page } from '../interfaces/page';

@Injectable()
export class ApiService {

  private events = null;
  private lastVideos = null;

  private baseUrl = 'http://localhost:8000';
  private eventsUrl = `${this.baseUrl}/events`;
  private lastVideosUrl = `${this.baseUrl}/videos/last`;

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

  public async getLast(): Promise<Video[]> {

    if (this.lastVideos) {
      return Promise.resolve(this.lastVideos);
    }

    return await this.http.get(this.lastVideosUrl).map(res => res.json()).toPromise();
  }

  public async loadPage(path: string): Promise<Page> {
    return Promise.resolve({title: 'test', body: '<h2>Test</h2>'});
  }

}
