import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.page.html',
  styleUrls: ['./audit.page.scss'],
})
export class AuditPage implements OnInit {
  tab: string = 'pending';
  pendingList = [];
  completedList = [];

  constructor(
    public navCtrl: NavController
  ) {
    this.tab = 'pending';
  }

  ngOnInit() {
    this.onTabClick('pending');
  }

  onTabClick(tab) {
    this.tab = tab;

    this.pendingList = [{
      id: 1,
      title: 'Adequação de Padrão 24/03/2019'
    }];

    this.completedList = [{
      id: 1,
      title: 'Adequação de Padrão 20/03/2019'
    }];
  }

}
