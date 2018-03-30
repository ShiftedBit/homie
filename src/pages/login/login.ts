import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from "../../app/core/services/auth.service";
import {FacebookLoginResponse} from "@ionic-native/facebook";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              protected authService: AuthService) {

  }

  login() {
    this.authService.login()
      .then((response: FacebookLoginResponse) => {
        this.authService.getUserDetail(response.authResponse.userID).then((user: any) => {
          console.log(JSON.stringify(user));
        });
        this.navCtrl.pop();
    }).catch(() => {
      console.log('Rejected FB Login');
    });
  }

}
