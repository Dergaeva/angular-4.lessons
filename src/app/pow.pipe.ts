import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AppPow'
})
export class  PowPipe implements PipeTransform{

  transform(value:any, powNumber: number = 1) {
    return Math.pow(value, powNumber);
  }
}
