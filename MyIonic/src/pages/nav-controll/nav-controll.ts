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
  params;
  show = false;
  opts = {animation : "ios-transition"};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     let message = navParams.get('message');
     if(message) {
        let index = navParams.get('index') + 1;
        this.params = { message : message, index : index};
        this.show = true;
     } else {
        this.params = { message : "this is message", index : 0};
     }
  }

  pushPage() {
      this.navCtrl.push(NavControllPage, this.params, this.opts);
  }

  popPage() {
       this.navCtrl.pop(this.opts);
  }
}
