import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  {

  public title: string;
  public body: string;
  public error: any = null;
  public loading = false;

  constructor(route: ActivatedRoute, private api: ApiService) {
    this.loadContent(route.routeConfig.path);
  }

  private async loadContent(path: string): Promise<void> {

    this.loading = true;

    try {
      const { title, body } = await this.api.getPage(path);
      this.title = title;
      this.body = body;
    } catch (e) {
      this.error = e;
    }

    this.loading = false;
  }
}
