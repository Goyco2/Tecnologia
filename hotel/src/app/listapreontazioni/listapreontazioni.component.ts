import { Component, Input, OnInit } from '@angular/core';
import { booking } from '../models/booking.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-listapreontazioni',
  templateUrl: './listapreontazioni.component.html',
  styleUrls: ['./listapreontazioni.component.css']
})
export class ListapreontazioniComponent implements OnInit{
  constructor(){

  }
  @Input() ListaPreno : booking[] = undefined!;
  @Input() room : Room=undefined!;
  ngOnInit(): void {
    
  }
  MostraDett(room : Room){
    this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed= room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed= room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;

    console.log(this.room);
  }
}
