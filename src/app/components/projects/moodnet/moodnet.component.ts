import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-moodnet',
  templateUrl: './moodnet.component.html',
  styleUrls: ['./moodnet.component.scss']
})
export class MoodnetComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  debug(){
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',    
    });
  }

}
