import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: any = {
    cs: { name: 'Český' },
    en: { name: 'English' },
    de: { name: 'Deutsch' },
    ru: { name: 'Русский' },
    es: { name: 'Español' },
    tr: { name: 'Türkçe' }
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };
  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
