import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class UserListComponent implements OnInit {
  Macchine: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.Macchine = ['Escavatori','Terne', 'Pale', 'Minipale', 'Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori','Piastre vibranti','Finitrici']; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}