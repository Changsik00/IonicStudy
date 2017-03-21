import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngStyle
 https://angular.io/docs/ts/latest/guide/template-syntax.html#!#structural-directives
 https://angular.io/docs/ts/latest/guide/structural-directives.html#!#definition
 https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html
*/
@Component({
  selector: 'page-directives',
  templateUrl: 'directives.html'
})
export class DirectivesPage {
  isActive = true;

  heroes: Array<{name:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.heroes = [
          {name: 'Spider-Man'},
          {name: 'Iron Man'},
          {name: 'Captain America'},
          {name: 'Thor'},
          {name: 'Doctor Strange'},
          {name: 'Hulk'},
          {name: 'Guardians of the Galaxy'},
          {name: 'Hawkeye'}
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectivesPage');
  }

}
