import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Brand[], filterBrand: string): Brand[] {
    filterBrand = filterBrand ? filterBrand.toLocaleLowerCase() : null
    return filterBrand ? value.filter(( b:Brand ) => b.brandName.toLocaleLowerCase().indexOf(filterBrand) !== -1) : value;
  }

}
