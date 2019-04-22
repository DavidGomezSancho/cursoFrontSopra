import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {
  @Output() onChangeTxtAr = new EventEmitter<string>();
  @Output() onChangeTxtAb = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTxtAr(val) {
    this.onChangeTxtAr.emit(val);
  }

  changeTxtAb(val) {
    this.onChangeTxtAb.emit(val);
  }

}
