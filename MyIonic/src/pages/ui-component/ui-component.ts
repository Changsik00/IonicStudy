import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyViewComponent } from '../../components/my-view/my-view';

/*
  Generated class for the UIComponent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

  https://angular.io/docs/ts/latest/cookbook/component-communication.html#
  http://learnangular2.com/viewChild/
*/
@Component({
  selector: 'page-ui-component',
  templateUrl: 'ui-component.html'
})
export class UIComponentPage {

  @ViewChild('myView') myView: MyViewComponent;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit UIComponentPage');
    this.myView.text = "this is test view";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UIComponentPage');
  }

}
