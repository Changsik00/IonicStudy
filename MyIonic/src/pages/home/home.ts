import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';
import { NavControllPage } from '../nav-controll/nav-controll';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage;
  constructor(public navCtrl: NavController) {
    this.pushPage = NavControllPage;
  }

  gotoNext() {
      console.log('HomePage gotoNext()');
      this.navCtrl.push(MainPage);
  }
}
