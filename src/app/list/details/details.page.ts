import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROVIDERS, ProviderType } from '../../../constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public provider: ProviderType;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const provider = PROVIDERS.filter(p => p.id === Number(id))[0];

    this.provider = provider;

    console.log(provider);
  }

}
