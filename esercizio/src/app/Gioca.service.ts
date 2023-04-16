import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  searchPlayer(query: string) {
    const url = `https://www.balldontlie.io/api/v1/players?first_name=${query}`;

    let obsPlayer = this.http.get(url);
    return obsPlayer;

  }
  getPlayer(id: string) {
    const url = `https://www.balldontlie.io/api/v1/players/${id}`;

    return this.http.get(url);
  }
}