// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  supportedLangs: ("es" | "en")[] = ['es','en'];
  defaultLang: "es" | "en" = 'en';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setDefaultLang(this.defaultLang);
  }

  use(lang: string) {
    const l = this.supportedLangs.includes(lang as any) ? lang as "es" | "en" : this.defaultLang;
    this.translate.use(l);
    return l;
  }
}
