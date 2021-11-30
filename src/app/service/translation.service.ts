import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import getUserLocale from 'get-user-locale';
import { location_data } from '../Location_data.ts/location_data';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  supportedLanguage = ['en', 'fr'];
  userLanguage = '';
  language = '';

  private url = 'https://ipapi.co/json/'



  constructor(private translate: TranslateService, private http: HttpClient) {
    setTimeout(() => {
      this.initLanguage();
    }, 2000)
  }
  getUserLanguage() {
    this.http.get<location_data>(this.url).subscribe((contryData) => {
      this.language = contryData.languages.split('-')[0];
    });
  }
  initLanguage() {
    this.getUserLanguage();
    if (this.supportedLanguage.includes(this.userLanguage)) {
      this.userLanguage = this.language;
    } else {
      this.userLanguage = 'en';
    }
    this.translate.use(this.userLanguage);
  }
}
