import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return null;
    if (!searchText) return items;

    return items.filter(i => {
      return i.title.toLowerCase().includes(searchText.toLowerCase())
    });

  }
}
