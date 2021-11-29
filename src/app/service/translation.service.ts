import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import getUserLocale from 'get-user-locale';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  supportedLanguage = ['en', 'fr'];
  userLanguage = '';



  constructor(private translate: TranslateService) {
    this.initLanguage();
    this.translate.use(this.userLanguage)
  }


  initLanguage() {
    const language = getUserLocale();
    if (this.supportedLanguage.includes(language)) {
      this.userLanguage = language;
    } else {
      this.userLanguage = 'en'
    }
  }
}
