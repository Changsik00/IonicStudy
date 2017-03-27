import { Component } from '@angular/core';

/*
  Generated class for the MyView component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-view',
  templateUrl: 'my-view.html'
})
export class MyViewComponent {

  text: string;

  constructor() {
    console.log('Hello MyView Component');
    this.text = 'Hello World';
  }

}
