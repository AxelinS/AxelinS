import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NekagochiComponent } from './nekagochi.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NekagochiComponent,
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
export class NekagochiModule { }
