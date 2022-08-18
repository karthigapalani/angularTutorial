import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  nvalue: string | undefined

  transform(value: any): any {

  this.nvalue = value.split('').reverse().join('');

    return this.nvalue;

  }

}
