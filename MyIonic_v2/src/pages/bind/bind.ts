import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Bind page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html'
})
export class BindPage {

  iconImg: string = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/save-128.png";
  title: string = "titleString";
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';


  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BindPage');
  }

  changeImage() {
    this.iconImg = "https://cdn4.iconfinder.com/data/icons/ui-icons-1-1/512/ThinIcons-UI1-image-01-128.png";
  }

}
