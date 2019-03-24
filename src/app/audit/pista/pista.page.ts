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
    this.items = [{
      key: 'spreader',
      title: 'Spreader',
      description: 'Envie uma foto do Spreader',
      status: 'ok'
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
    }, {
      key: 'spreader',
      title: 'Spreader',
      description: 'Envie uma foto do Spreader',
      status: 'waiting'
    }, {
      key: 'spreader',
      title: 'Spreader',
      description: 'Envie uma foto do Spreader',
      status: 'waiting'
    }, {
      key: 'spreader',
      title: 'Spreader',
      description: 'Envie uma foto do Spreader',
      status: 'waiting'
    }, {
      key: 'spreader',
      title: 'Spreader',
      description: 'Envie uma foto do Spreader',
      status: 'waiting'
    }];
  }

  getIconByStatus(item) {
    if (item.status === 'waiting') {
      return 'arrow-forward';
    } else if (item.status === 'ok') {
      return 'checkmark';
    }
  }

  takePhoto(item) {
    this.navCtrl.navigateForward('/audit/pista/take-photo');
    
    // push('/);
    // this.router.navigate(['/audit/pista/take-photo']);
  }

}
