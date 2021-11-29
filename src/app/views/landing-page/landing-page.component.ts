import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private language: TranslationService) { }

  ngOnInit(): void {
    this.language.initLanguage();
  }
}
