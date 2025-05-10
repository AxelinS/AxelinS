// header.component.ts
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { UntypedFormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate("250ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible = false;
  pageYPosition: number;
  languageFormControl = new UntypedFormControl();
  cvName = "";

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    const current = this.translate.currentLang || this.languageService.defaultLang;
    this.languageFormControl.setValue(current);

    this.languageFormControl.valueChanges.subscribe(lang => {
      this.onLanguageChange(lang);
    });
  }

  onLanguageChange(lang: string) {
    const valid = this.languageService.supportedLangs.includes(lang as any);
    const newLang = valid ? (lang as "es" | "en") : this.languageService.defaultLang;

    this.languageService.use(newLang);
    this.languageFormControl.setValue(newLang, { emitEvent: false });
    const segments = this.router.url
      .split('/')
      .filter(segment =>
        segment &&
        !this.languageService.supportedLangs.includes(segment as "es" | "en")
    );

    this.router.navigate([newLang, ...segments]);
  }

  scroll(el: string) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() =>
        document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
      );
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    this.translate.get("Header.cvName").subscribe(val => {
      this.cvName = val;
      window.open(`${this.cvName}`, "_blank");
    });
  }

  @HostListener('window:scroll')
  getScrollPosition() {
    this.pageYPosition = window.pageYOffset;
  }

  toggleMenu() {
    this.responsiveMenuVisible = !this.responsiveMenuVisible;
  }
}