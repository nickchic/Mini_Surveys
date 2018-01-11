import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize'
})
@Injectable()
export class TitleizePipe implements PipeTransform {
  public static skipWords = ['the', 'of', 'a', 'an', 'and', 'in'];

  transform(value: string, args?: boolean | string[]): string {
    if (typeof value !== 'string') { return value; }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipwords: boolean = args !== false;

    return value.replace(/\w[^-\s]*/g, (word, index: number) => {
      return (processSkipwords && index && skipWords.includes(word.toLowerCase())) ?
                word.toLowerCase() :
                word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
