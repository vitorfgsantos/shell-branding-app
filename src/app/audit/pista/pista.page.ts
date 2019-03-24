import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.page.html',
  styleUrls: ['./pista.page.scss'],
})
export class PistaPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  items: any[];
  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getItems();
  }

  getItems() {
    if (localStorage.items) {
      this.items = JSON.parse(localStorage.items);
    } else {
      this.items = [{
        key: 'spreader',
        title: 'Spreader',
        img: '/assets/audit/spreader.png',
        description: 'Envie uma foto do Spreader',
        status: 'waiting'
      }, {
        key: 'pecten',
        title: 'Pecten',
        img: '/assets/audit/pecten.png',
        description: 'Envie uma foto do Pecten',
        status: 'waiting'
      }, {
        key: 'testeira',
        title: 'Testeira',
        img: '/assets/audit/testeira.png',
        description: 'Envie uma foto do Testeira',
        status: 'waiting'
      }, {
        key: 'sentinela',
        title: 'Sentinela',
        img: '/assets/audit/sentinela.png',
        description: 'Envie uma foto do Sentinela',
        status: 'waiting'
      }, {
        key: 'pintura-saia-de-bomba',
        title: 'Pintura de saia de bomba',
        img: '/assets/audit/pintura-saia-de-bomba.png',
        description: 'Envie uma foto da pintura de saia de bomba',
        status: 'waiting'
      }, {
        key: 'frente-posto',
        title: 'Frente do posto',
        img: '/assets/audit/frente-posto.jpg',
        description: 'Envie uma foto da frente do posto',
        status: 'waiting'
      }];
    }

    if (!localStorage.items) {
      localStorage.items = JSON.stringify(this.items);
    }
  }

  getIconByStatus(item) {
    if (item.status === 'waiting') {
      return 'arrow-forward';
    } else if (item.status === 'ok') {
      return 'checkmark';
    }
  }

  takePhoto(item) {
    this.router.navigate(['/audit/pista/take-photo/' + item.key]);
  }

}
