import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  mostrar: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  cambiarMostrar(){
    this.mostrar = !this.mostrar;
  }

}
