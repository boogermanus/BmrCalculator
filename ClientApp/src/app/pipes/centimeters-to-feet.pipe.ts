import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetersToFeet'
})
export class CentimetersToFeetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
