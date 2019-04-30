import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'comfortableTelephoneNumber'
})

export class ComfortableTelephoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    return '+7' + ' (' + value.slice(2, 5) + ') ' + value.slice(5, 8) + ' - ' + value.slice(8, 12) ;
  }
}
