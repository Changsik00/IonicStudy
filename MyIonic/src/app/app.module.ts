import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { NavControllPage } from '../pages/nav-controll/nav-controll';
import { DirectivesPage } from '../pages/directives/directives';
import { BindPage } from '../pages/bind/bind';
import { NgClassPage } from '../pages/ng-class/ng-class';
import { JsonDataPage } from '../pages/json-data/json-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    NavControllPage,
    DirectivesPage,
    BindPage,
    NgClassPage,
    JsonDataPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    NavControllPage,
    DirectivesPage,
    BindPage,
    NgClassPage,
    JsonDataPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
