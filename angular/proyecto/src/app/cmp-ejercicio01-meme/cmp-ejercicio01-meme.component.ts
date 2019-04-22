import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-ejercicio01-meme',
  templateUrl: './cmp-ejercicio01-meme.component.html',
  styleUrls: ['./cmp-ejercicio01-meme.component.css']
})
export class CmpEjercicio01MemeComponent {
  // imgUrl = 'https://i.imgflip.com/12dxv.jpg';
  textoAr = "Arriba"
  textoAb = "Abajo"

  cambiarTextoAr(txt) {
    this.textoAr = txt;
  }

  cambiarTextoAb(txt) {
    this.textoAb = txt;
  }


}
