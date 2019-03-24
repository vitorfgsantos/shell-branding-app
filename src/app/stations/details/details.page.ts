import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STATIONS } from '../../../constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public station;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const station = STATIONS.filter(p => p.id === Number(id))[0];

    this.station = station;

    console.log(station);
  }

}
