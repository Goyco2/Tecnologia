import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from './Gioca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio';
  obsPlayer!: Observable<Object>;

  constructor(public PlayersService: PlayersService) { 
    this. obsPlayer = PlayersService.searchPlayer("");
    this.obsPlayer.subscribe((data) => console.log(data));
  }
}
