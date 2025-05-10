import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AneekaModule } from './components/projects/aneeka/aneeka.module';
import { NekagochiModule } from './components/projects/nekagochi/nekagochi.module';
import { HomeModule } from './components/home/home.module';
import { GeneralModule } from './components/general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AiosuModule } from './components/projects/ai-osu/ai-osu.module';
import { FoodScholarshipModule } from './components/projects/food-scolarship/food-scholarship.module';
import { MinecraftBotModule } from './components/projects/minecraft-bot/minecraft-bot.module';
import { MoodnetModule } from './components/projects/moodnet/moodnet.module';
import { EnergyModule } from './components/projects/energy-monitoring/energy.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    /* ArchiveComponent */
  ],
  imports: [
    BrowserAnimationsModule,

    HomeModule,
    AneekaModule,
    NekagochiModule,
    AiosuModule,
    FoodScholarshipModule,
    MinecraftBotModule,
    MoodnetModule,
    EnergyModule,
    GeneralModule,

    // AnimateOnScrollModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
