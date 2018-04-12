import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {HomieApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CoreModule} from "./core/core.module";
import {LoginPage} from "../pages/login/login";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./core/reducers/user.reducer";
import {ProfilePage} from "../pages/profile/profile";

@NgModule({
  declarations: [
    HomieApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: userReducer
    }),
    CoreModule.forRoot(),
    IonicModule.forRoot(HomieApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomieApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
