import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})

export class MacchinaComponent implements OnInit {
  @Input() name: string; // <-- Aggiungi la notazione @input
  componenti: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.componenti = ['tubo di scarico', 'filtri','bullone', 'viti'];
  }

  ngOnInit() {}
}