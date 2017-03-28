import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { TestDataModel } from '../../models/test-data/test-data';
/*
  Generated class for the JsonData page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

  https://angular.io/docs/ts/latest/guide/server-communication.html
  https://www.joshmorony.com/using-http-to-fetch-remote-data-from-a-server-in-ionic-2/

  https://github.com/typicode/jsonplaceholder#how-to
*/
@Component({
  selector: 'page-json-data',
  templateUrl: 'json-data.html'
})
export class JsonDataPage {
  show = false;
  testDataModel: TestDataModel;
  loadingPopup;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
    this.loadingPopup = loadingCtrl.create({ content: 'Please wait...' });
    this.loadData();
  }

  loadData() {
    this.loadingPopup.present();
    this.requestData1();
    // this.requestData2();
  }

  requestData1() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1').map(res => res.json())
      .subscribe(data => {
        this.httpResponseSuccess(data);
      },
      err => {
        this.httpResponseError(err);
      });
  }

  requestData2() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let params: { id: 1, title: 'foo', body: 'bar', userId: 1 };

    return this.http.post("http://jsonplaceholder.typicode.com/posts", params, options)
      .map(res => res.json()).subscribe(data => {
        this.httpResponseSuccess(data);
      },
      err => {
        this.httpResponseError(err);
      });
  }

  httpResponseSuccess(data) {
    this.loadingPopup.dismiss();
    this.show = true;

    this.testDataModel = new TestDataModel(data);
    console.log("toString : " + this.testDataModel.toString());
  }

  httpResponseError(err) {
    this.loadingPopup.dismiss();
    this.show = false;
    console.log("Oops! : " + err);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonDataPage');
  }

}
