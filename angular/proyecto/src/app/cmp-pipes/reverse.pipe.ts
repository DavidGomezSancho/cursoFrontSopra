import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(cadena: string, args?: string): string {
    let tamanyo = cadena.length;
    let cadenaReverse = "";
    for (let i = tamanyo; i>=0; i--){
      cadenaReverse += cadena.charAt(i);
    }
    return cadenaReverse;
  }

}
