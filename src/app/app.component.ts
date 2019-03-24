import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [{
    title: 'Home',
    url: '/home',
    icon: 'home'
  }, {
    title: 'Catálogo de Fornecedores',
    url: '/list',
    icon: 'list'
  }, {
    title: 'Meus postos',
    url: '/stations',
    icon: 'pin'
  }, {
    title: 'Auditoria',
    url: '/audit',
    icon: 'megaphone'
  }, {
    title: 'Manuais',
    url: '/manuals',
    icon: 'book'
  }, {
    title: 'Suporte',
    url: '/list',
    icon: 'chatbubbles'
  }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
