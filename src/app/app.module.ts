import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterModule } from 'localize-router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EventsComponent } from './components/events/events.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';
import { EventFormComponent } from './components/event-form/event-form.component';
import { BannersComponent } from './components/banners/banners.component';
import { EventThumbComponent } from './components/event-thumb/event-thumb.component';
import { VideoComponent } from './components/video/video.component';
import { VideosContainerComponent } from './components/videos-container/videos-container.component';
import { PageComponent } from './components/page/page.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NavigationComponent,
    HomeComponent,
    EventFormComponent,
    BannersComponent,
    EventThumbComponent,
    VideoComponent,
    VideosContainerComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    LocalizeRouterModule.forRoot(routes),
    NgxPaginationModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
