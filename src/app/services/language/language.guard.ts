// language.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class LanguageGuard implements CanActivate {
  constructor(
    private langService: LanguageService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const urlSegments = state.url.split('/').filter(s => !!s);
    const [urlLang, ...rest] = urlSegments;
    const usedLang = this.langService.use(urlLang);

    if (usedLang !== urlLang) {
      // si urlLang no era válido, redirijo conservando la ruta restante
      return this.router.createUrlTree([usedLang, ...rest]) as any;
    }

    // idioma válido: dejo que siga
    return true;
  }
}
