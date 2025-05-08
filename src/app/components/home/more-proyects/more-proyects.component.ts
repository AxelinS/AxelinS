import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
  currentLang: string;
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    private translate: TranslateService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang = event.lang;
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
