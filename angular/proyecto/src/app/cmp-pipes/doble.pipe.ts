import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'doble'
})
export class DoblePipe implements PipeTransform {
    transform(precio: number, arg1?: number, arg2?: number): number {
        let resultado = precio * 2;
        if (arg1) {
            resultado += arg1;
            if (arg2) {
                resultado -= arg2;
            }
        }
        return resultado;
    }
}