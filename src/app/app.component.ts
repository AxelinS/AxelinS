import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'robinandrade-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.titleService.setTitle( "Robin Andrade | Software Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'back-end, ml, software, developer'},
      {name: 'description', content: 'Soy un desarrollador de software apasionado por la tecnología y siempre busco aprender y mejorar mis habilidades.'},
    ]);
    
    
    AOS.init(); 

  }
}
