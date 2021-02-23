import { Pipe, PipeTransform } from '@angular/core';
/*
 * Custom format that change date in readable
 * metric
 * example 1:
 * {{ 'standard' | measure }} will become Standard
*/
@Pipe({ name: 'measure' })
export class CustomMeasurePipe implements PipeTransform {
  transform(value: string): string {
    let measure = '';
    switch (value) {
      case 'standard':
        measure = 'K';
        break;
      case 'metric':
        measure = 'C';
        break;
      case 'imperial':
        measure = 'F';
        break;
      default:
        break;
    }
    return measure;
  }
}
