import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { STATIONS, PROVIDERS } from '../../../../constants';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
})
export class EquipmentsPage implements OnInit {
  public equipment = {};
  public providers = [];
  public show = false;

  constructor(private route: ActivatedRoute, public loadingController: LoadingController) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const equipment = STATIONS[0].equipments.filter(e => e.id === Number(id))[0];
    
    this.providers = PROVIDERS;
    this.equipment = equipment;
  }

  async handleClick() {
    const loading = await this.loadingController.create({
      message: 'Carregando fornecedores...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.show = true;
  }

}
