import { Injectable } from '@angular/core';
import { IBmrSettings } from '../Models/ibmr-settings';
import { GenderConstants } from '../Models/gender-constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  readonly SETTINGS_KEY = 'brmSettings';
  readonly GENDER_INDEX = 0;
  readonly UNIT_INDEX = 1;
  readonly NAME_INDEX = 2;
  constructor() { }

  getSettings(): IBmrSettings {
    const value: IBmrSettings = {
      gender: '',
      unitOfMeasure: '',
      name: ''
    };

    const data = localStorage.getItem(this.SETTINGS_KEY);

    if (data !== null) {
      const settings: string[] = data.split(':');
      value.gender = settings[this.GENDER_INDEX];
      value.unitOfMeasure = settings[this.UNIT_INDEX];
      value.name = settings[this.NAME_INDEX];
    }

    return value;
  }

  saveSettings(settings: IBmrSettings) {
    const data = `${settings.gender}:${settings.unitOfMeasure}:${settings.name}`;
    localStorage.setItem(this.SETTINGS_KEY, data);
  }
}
