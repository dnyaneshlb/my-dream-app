import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    if(ninjas){
      if(term === undefined) return ninjas;

      //filer ninjas according to use input term
      return ninjas.filter(function(ninja){
          //This is ES6 code. See ES6 please.
          return ninja.name.toLowerCase().includes(term.toLowerCase())
      });
    }
  }

}
