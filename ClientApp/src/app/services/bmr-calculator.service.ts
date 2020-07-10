import { Injectable } from '@angular/core';
import { IBmrCalculation } from '../models/ibmr-calculation';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';
import { IBmr } from '../models/ibmr';

@Injectable({
  providedIn: 'root'
})
export class BmrCalculatorService {

  readonly WEIGHT_CONSTANT = 10;
  readonly HEIGHT_CONSTANT = 6.25;
  readonly AGE_CONSTANT = 5;
  readonly MALE_CONSTANT = 5;
  readonly FEMALE_CONSTANT = -161;
  readonly IMPERIAL_WEIGHT = 2.2;
  readonly IMPERIAL_HEIGHT = 30.48;
  readonly HEIGHT_INCHES = 12;
  constructor() { }

  private calculateMetric(options: IBmrCalculation): IBmrCalculation {
    options.bmr = (this.WEIGHT_CONSTANT * options.weight)
      + (this.HEIGHT_CONSTANT * options.height)
      - (this.AGE_CONSTANT * options.age)
      + (options.gender === GenderConstants.MALE ? this.MALE_CONSTANT : this.FEMALE_CONSTANT);
      options.bmr = +options.bmr.toFixed(2);
    return options;
  }

  private calculateImperial(options: IBmrCalculation): IBmrCalculation {
    options.weight /= this.IMPERIAL_WEIGHT;
    options.height = options.height + (options.heightInInches / this.HEIGHT_INCHES);
    options.height *= this.IMPERIAL_HEIGHT;

    return this.calculateMetric(options);
  }

  public calculate(options: IBmrCalculation): IBmrCalculation {
    return options.unitOfMeasure === UnitOfMeasureConstants.IMPERIAL
      ? this.calculateImperial(options)
      : this.calculateMetric(options);
  }
}
