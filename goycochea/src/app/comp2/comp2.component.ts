import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  name: string;
  constructor() { 
    this.name = "terzo"
  }

  ngOnInit(): void {
  }

}