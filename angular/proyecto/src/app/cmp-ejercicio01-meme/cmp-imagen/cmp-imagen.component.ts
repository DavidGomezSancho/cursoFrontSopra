import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-imagen',
  templateUrl: './cmp-imagen.component.html',
  styleUrls: ['./cmp-imagen.component.css']
})
export class CmpImagenComponent implements OnInit {
  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  imgUrl = 'https://i.imgflip.com/12dxv.jpg';

  constructor() { }

  ngOnInit() {
  }

}
