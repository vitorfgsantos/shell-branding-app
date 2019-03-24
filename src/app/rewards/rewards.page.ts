import { Component, OnInit } from '@angular/core';
import { STATIONS } from '../../constants';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  tab: string = 'stations';
  stations = [];
  rankings = [];

  constructor() { }

  ngOnInit() {
    this.stations = STATIONS;

    this.rankings = [
      {
        id: 1,
        name: 'Posto Vila Ema, São Paulo',
        image: '/assets/audit/posto-pg.jpg',
        ranking: 1,
      },
      {
        id: 2,
        name: 'Posto Vila Prudente, São Mateus',
        image: '/assets/audit/posto-pg.jpg',
        ranking: 2,
      },
      {
        id: 3,
        name: 'Posto Zona Verde, São Paulo',
        image: '/assets/audit/posto-pg.jpg',
        ranking: 3,
      },
      {
        id: 4,
        name: 'Posto Lava Tudo, São Paulo',
        image: '/assets/audit/posto-pg.jpg',
        ranking: 4,
      },
      {
        id: 5,
        name: 'Posto Radar Três, São Paulo',
        image: '/assets/audit/posto-pg.jpg',
        ranking: 5,
      },
    ]
  }

  onTabClick(tab) {
    this.tab = tab;
  }

}
