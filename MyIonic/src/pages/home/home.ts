import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  gotoNext() {
      console.log('HomePage gotoNext()');
      this.navCtrl.push(MainPage);
  }
}
