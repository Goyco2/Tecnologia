import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PLayersService {

  constructor(private http: HttpClient) { }

  searchBeer(query: string) {
    const url = `https://www.balldontlie.io/api/v1/players?players_name=${query}`;

    let obsGioca = this.http.get(url);
    return obsGioca;

  }
}