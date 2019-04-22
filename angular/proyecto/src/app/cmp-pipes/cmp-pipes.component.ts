import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  nombre: string = "Calcetines de minions";
  descripcion: string = "Minions ipsum po kass pepete poulet tikka masala jeje hahaha butt. Aaaaaah belloo! Baboiii ti aamoo! Gelatooo gelatooo chasy uuuhhh poulet tikka masala tatata bala tu para tú hahaha. Jeje jiji ti aamoo! Bee do bee do bee do belloo! Aaaaaah wiiiii hahaha pepete underweaaar potatoooo. Baboiii uuuhhh aaaaaah underweaaar pepete pepete bee do bee do bee do aaaaaah jeje ti aamoo! Tatata bala tu poopayee jeje hahaha wiiiii. Bappleees bananaaaa gelatooo pepete jeje butt."
  precio: number = 3;
  fechaVenta: Date = new Date(2019, 3, 18);
  constructor() { }

  ngOnInit() {
  }

}
