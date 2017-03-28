import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';
import { NavControllPage } from '../nav-controll/nav-controll';
import { DirectivesPage } from '../directives/directives'
import { BindPage } from '../bind/bind'
import { NgClassPage } from '../ng-class/ng-class';
import { JsonDataPage } from '../json-data/json-data';
import { UIComponentPage } from '../ui-component/ui-component';
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
        {title: "Goto BindPage" , page: BindPage},
        {title: "Goto NgClassPage" , page: NgClassPage},
        {title: "Goto JsonDataPage" , page: JsonDataPage},
        {title: "Goto UIComponentPage" , page: UIComponentPage},
    ];

  }

  itemSelected(item) {
     this.navCtrl.push(item.page);
  }
}
