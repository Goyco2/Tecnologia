import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  name: string;
  constructor() { 
    this.name = "quarto"
  }
  
  ngOnInit(): void {
  }
  
  }
