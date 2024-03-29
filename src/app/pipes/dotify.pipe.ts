import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotify',
  standalone: true
})
export class DotifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
