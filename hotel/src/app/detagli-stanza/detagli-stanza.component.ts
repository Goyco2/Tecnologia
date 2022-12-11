import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-detagli-stanza',
  templateUrl: './detagli-stanza.component.html',
  styleUrls: ['./detagli-stanza.component.css']
})
export class DetagliStanzaComponent implements OnInit {
  @Input() room : Room = undefined!;
  
  constructor(){}

  ngOnInit(): void {}
    

}
