import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/*
  https://ionicframework.com/docs/v2/api/navigation/NavController/
  https://ionicframework.com/docs/v2/api/components/nav/NavPush/
  https://ionicframework.com/docs/v2/api/components/nav/NavPop/

  https://ionicframework.com/docs/v2/api/util/Events/

  http://blog.ionic.io/navigating-lifecycle-events/
*/
@Component({
    selector: 'page-nav-controll',
    templateUrl: 'nav-controll.html'
})
export class NavControllPage {
    params;
    show = false;
    opts = { animation: "ios-transition" };
    index;
    isFirstPage = true;
    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
        let message = navParams.get('message');
        if (message) {
            this.index = navParams.get('index') + 1;
            this.params = { message: message, index: this.index };
            this.show = true;
            this.isFirstPage = false;
        } else {
            this.params = { message: "this is message", index: 0 };
        }
    }

    eventHandler(user, time) {
        console.log(`Welcome, ${user} , at  ${time}`);
    }

    ionViewDidLoad() {
       // console.log("#@# ionViewDidLoad " + this.index);
        this.events.subscribe('user:created', this.eventHandler);
    }

    ionViewWillEnter() {
       // console.log("#@# ionViewWillEnter " + this.index);
    }

    ionViewDidEnter() {
       // console.log("#@# ionViewDidEnter " + this.index);
    }

    ionViewWillLeave() {
       // console.log("#@# ionViewWillLeave " + this.index);
    }

    ionViewDidLeave() {
       // console.log("#@# ionViewDidLeave " + this.index);
    }

    ionViewWillUnload() {
       // console.log("#@# ionViewWillUnload " + this.index);
        this.events.unsubscribe('user:created', this.eventHandler);
    }


    pushPage() {
        this.navCtrl.push(NavControllPage, this.params, this.opts);
    }

    popPage() {
        if (!this.isFirstPage) {
            this.events.publish('user:created', `user ${this.index}`, Date.now());
        }

        this.navCtrl.pop(this.opts);
    }
}
