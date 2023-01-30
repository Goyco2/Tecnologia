import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBpBqt2u1VCfqC3pdHYTItdn8KIxJBri-W24ra2khVWZbSvj_8XRx-8flv1nDutJlGXizHxoJZuN7jea-Esom6PnSd_C41rjxgG4ktITCnQtSr2b6E-bA1mMIAEcI3M98U4nIff4UcBZU85bfgfJ38pmDYhMj8MXErZXtoxvgQuEYokJj9jRf7oGaORhT3EvOYx'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}