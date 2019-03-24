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
        description: 'Envie uma foto do Spreader',
        status: 'waiting'
      }, {
        key: 'pecten',
        title: 'Pecten',
        description: 'Envie uma foto do Pecten',
        status: 'waiting'
      }, {
        key: 'testeira',
        title: 'Testeira',
        description: 'Envie uma foto do Testeira',
        status: 'waiting'
      }, {
        key: 'sentinela',
        title: 'Sentinela',
        description: 'Envie uma foto do Sentinela',
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
