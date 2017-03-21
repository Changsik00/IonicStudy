import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';
import { NavControllPage } from '../nav-controll/nav-controll';
import { DirectivesPage } from '../directives/directives'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage;
  items: Array<{title: string, page: any}>;
  groceries: any;
  constructor(public navCtrl: NavController) {
    this.pushPage = NavControllPage;

    this.items = [
        {title: "Goto Main" , page: MainPage},
        {title: "Goto NavControll" , page: NavControllPage},
        {title: "Goto DirectivesPage" , page: DirectivesPage},
    ];

  }

  itemSelected(item) {
     this.navCtrl.push(item.page);
  }
}
