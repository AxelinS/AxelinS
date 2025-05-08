import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../components/banner/banner.component';
import { ContactComponent } from '../components/contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BannerComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    BannerComponent,
    ContactComponent,
  ]
})
export class SharedModule { }
