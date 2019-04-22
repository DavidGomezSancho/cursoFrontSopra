import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-mi-propio-two-way-binding',
  templateUrl: './cmp-mi-propio-two-way-binding.component.html',
  styleUrls: ['./cmp-mi-propio-two-way-binding.component.css']
})
export class CmpMiPropioTwoWayBindingComponent implements OnInit {

  constructor() { }

  producto: string = "producto!";

  ngOnInit() {
  }
  resetProducto(){
    this.producto = "";
  }
  
  changeProduct(event){
    this.producto = event.target.value;
  }
}
