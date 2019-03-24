import { Component, OnInit } from '@angular/core';
import { PROVIDERS, ProvidersType } from '../../constants';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public providers: ProvidersType = [];

  constructor() {
    this.providers = PROVIDERS;
  }

  ngOnInit() {
  }
}
