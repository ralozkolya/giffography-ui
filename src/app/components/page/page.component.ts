import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ApiService } from '../../services/api.service';
import { Page } from "../../interfaces/page";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public page: Page;
  public title: string;
  public body: string;
  public error: any = null;
  public loading = false;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private translate: TranslateService) {}

  public ngOnInit(): void {

    this.translate.onLangChange.subscribe(() => this.assignLocalized());

    this.loadContent(this.route.routeConfig.path);
  }

  private async loadContent(path: string): Promise<void> {

    this.loading = true;

    try {
      this.page = await this.api.getPage(path);
      this.assignLocalized();
    } catch (e) {
      this.error = e;
    }

    this.loading = false;
  }

  private assignLocalized(): void {
    const lang = this.translate.currentLang;
    this.title = this.page[`${lang}_title`];
    this.body = this.page[`${lang}_body`];
  }
}
