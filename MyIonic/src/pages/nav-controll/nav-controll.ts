import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  https://ionicframework.com/docs/v2/api/navigation/NavController/
  https://ionicframework.com/docs/v2/api/components/nav/NavPush/
  https://ionicframework.com/docs/v2/api/components/nav/NavPop/
*/
@Component({
  selector: 'page-nav-controll',
  templateUrl: 'nav-controll.html'
})
export class NavControllPage {
  pushPage;
  params;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.pushPage = NavControllPage;     
     this.params = { message : "test message"};
  }
}
