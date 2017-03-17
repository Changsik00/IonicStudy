import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/*
  https://ionicframework.com/docs/v2/api/navigation/NavController/
  https://ionicframework.com/docs/v2/api/components/nav/NavPush/
  https://ionicframework.com/docs/v2/api/components/nav/NavPop/

  https://ionicframework.com/docs/v2/api/util/Events/
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
    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
        let message = navParams.get('message');
        if (message) {
            this.index = navParams.get('index') + 1;
            this.params = { message: message, index: this.index };
            this.show = true;

            events.subscribe('user:created', (user, time) => {
                console.log(`Welcome, ${user} , at  ${time}`);
            });

        } else {
            this.events.unsubscribe('user:created');
            this.params = { message: "this is message", index: 0 };
        }


    }

    pushPage() {
        this.navCtrl.push(NavControllPage, this.params, this.opts);
    }

    popPage() {
        this.events.publish('user:created', `user ${this.index}`, Date.now());
        this.navCtrl.pop(this.opts);
    }
}
