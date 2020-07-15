import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';

@Pipe({
  name: 'centimetersToFeet'
})
export class CentimetersToFeetPipe implements PipeTransform {

  constructor(private settingsService: SettingsService) {}
  transform(value: any, ...args: unknown[]): number {
    const settings = this.settingsService.getSettings();

    return settings.unitOfMeasure === UnitOfMeasureConstants.IMPERIAL
      ? +(value * UnitOfMeasureConstants.CM_TO_F).toFixed(2)
      : value;
  }

}
