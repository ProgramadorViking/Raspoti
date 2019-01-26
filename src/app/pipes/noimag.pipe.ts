import { Pipe, PipeTransform } from '@angular/core';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

@Pipe({
  name: 'noimag'
})
export class NoimagPipe implements PipeTransform {

  transform(img: any[]): string {
    if (!img) {
      return 'assets/img/noimage.png';
    }
    if (img.length>0) {
      return img[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
    return null;
  }

}
