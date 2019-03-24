import { Component, OnInit } from '@angular/core';
import { STATIONS } from '../../constants';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.page.html',
  styleUrls: ['./stations.page.scss'],
})
export class StationsPage implements OnInit {
  stations: [];

  constructor() { }

  ngOnInit() {
    this.stations = STATIONS;
  }

}
