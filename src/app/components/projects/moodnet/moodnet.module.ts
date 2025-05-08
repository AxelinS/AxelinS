import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoodnetComponent } from './moodnet.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MoodnetComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbNavModule,
    CarouselModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class MoodnetModule { }
