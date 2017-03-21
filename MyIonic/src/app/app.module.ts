import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { NavControllPage } from '../pages/nav-controll/nav-controll';
import { DirectivesPage } from '../pages/directives/directives';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    NavControllPage,
    DirectivesPage
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
    DirectivesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
