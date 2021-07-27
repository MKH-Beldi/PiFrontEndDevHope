import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any, property?: any): any {
    if (!value){ return null ; }
    if (!args){ return value; }
    args = args.toLowerCase();
    if (!property) {
      // tslint:disable-next-line:only-arrow-functions
      return value.filter(function(data){
        return JSON.stringify(data).toLowerCase().includes(args);
      });
    } else {
      // tslint:disable-next-line:only-arrow-functions
        return value.filter(function(data) {
          return JSON.stringify(data[property]).toLowerCase().includes(args);
        });
      }
    }
  }

