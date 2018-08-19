import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'utc'
})
export class UtcPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const originalDate = new Date(value);
    const newDate = new Date(
      originalDate.getFullYear(),
      originalDate.getMonth(),
      originalDate.getDate(),
      originalDate.getUTCHours(),
      originalDate.getUTCMinutes(),
      originalDate.getUTCSeconds()
    );
    return newDate;
  }

}
