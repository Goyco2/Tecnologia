import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayersService } from '../Gioca.service';
import {Location} from '@angular/common'


@Component({
  selector: 'app-caratteristiche',
  templateUrl: './caratteristiche.component.html',
  styleUrls: ['./caratteristiche.component.css']
})
export class CaratteristicheComponent implements OnInit{
  routeObs!: Observable<ParamMap>;
  Player: any;
  PlayerServiceObs!: Observable<any>;

  constructor(private route: ActivatedRoute, private PlayersService: PlayersService, private location : Location) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let PlayerId = params.get('id');
    console.log (PlayerId);

    if (PlayerId != null) {
      this.PlayerServiceObs = this.PlayersService.getPlayer(PlayerId) ;
      this.PlayerServiceObs.subscribe((data)=>this.Player = data)
    }
  }
  
  back() : void {
    this.location.back();
  }
}
