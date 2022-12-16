import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value/60)
    let secondes = value % 60
    return `${minutes < 10 ? '0' : ''}${minutes} : ${secondes < 10 ? '0' : ''}${secondes}`;
  }

}
