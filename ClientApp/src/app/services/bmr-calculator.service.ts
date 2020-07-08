import { Injectable } from '@angular/core';
import { IBmrCalculation } from '../models/ibmr-calculation';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';

@Injectable({
  providedIn: 'root'
})
export class BmrCalculatorService {

  readonly WEIGHT_CONSTANT = 10;
  readonly HEIGHT_CONSTANT = 6.25;
  readonly AGE_CONSTANT = 5;
  readonly MALE_CONSTANT = 5;
  readonly FEMALE_CONSTANT = 161;
  readonly IMPERIAL_WEIGHT = 2.2;
  readonly IMPERIAL_HEIGHT = 2.54;
  constructor() { }

  private calculateMetric(options: IBmrCalculation): number {
    return (this.WEIGHT_CONSTANT * options.weight)
      + (this.HEIGHT_CONSTANT * options.height)
      + (this.AGE_CONSTANT * options.age)
      + (options.gender === GenderConstants.MALE ? this.MALE_CONSTANT : this.FEMALE_CONSTANT)
  }

  private calculateImperial(options: IBmrCalculation): number {
    options.weight /= this.IMPERIAL_WEIGHT;
    options.height *= this.IMPERIAL_HEIGHT;

    return this.calculateMetric(options);
  }

  public calculate(options: IBmrCalculation): number {
    return options.unitOfMeasure === UnitOfMeasureConstants.IMPERIAL
      ? this.calculateImperial(options)
      : this.calculateMetric(options);
  }
}
