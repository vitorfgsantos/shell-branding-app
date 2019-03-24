import { Component, OnInit } from '@angular/core';
import { PROVIDERS, ProvidersType } from '../../constants';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  searchTerm: string = '';
  public providers: ProvidersType = [];

  constructor() {
    this.providers = PROVIDERS;
  }

  ngOnInit() {
  }

  filterProvider(ev) {
    let term = ev.target.value;

    if (term && term.trim() !== '') {
      this.providers = PROVIDERS.filter(p => p.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    } else {
      this.providers = PROVIDERS;
    }
  }
}
