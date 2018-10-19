import { Pipe, PipeTransform } from '@angular/core';
import * as linkifyString from 'linkifyjs/string';

@Pipe({name: 'linkifystr'})
export class LinkifystrPipe implements PipeTransform {
  transform(str: string): string {
    return str ? linkifyString(str, {target: '_system'}) : str;
  }
}