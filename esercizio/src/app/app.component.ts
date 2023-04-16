import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PLayersService } from './Gioca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio';
  obsGioca!: Observable<Object>;

  constructor(public beerService: PLayersService) { 
    this. obsGioca = beerService.searchBeer("punk");
    this.obsGioca.subscribe((data) => console.log(data));
  }
}
