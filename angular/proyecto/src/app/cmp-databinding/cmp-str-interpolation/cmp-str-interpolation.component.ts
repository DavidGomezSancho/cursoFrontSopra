import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-str-interpolation',
  templateUrl: './cmp-str-interpolation.component.html',
  styleUrls: ['./cmp-str-interpolation.component.css']
})
export class CmpStrInterpolationComponent implements OnInit {

  nombre: string = "Amgel";

  constructor() { }

  ngOnInit() {
  }

}
