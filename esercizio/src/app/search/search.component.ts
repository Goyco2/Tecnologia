import { Component } from '@angular/core';
import { PlayersService } from '../Gioca.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  results: any;
  obsPlayer!: Observable<Object>;
  constructor(public PlayersService: PlayersService) {}

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsPlayer = this.PlayersService.searchPlayer(this.query);
    this.obsPlayer.subscribe((data) => this.results = data); 
  }

}
