import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from "../../app/core/services/auth.service";
import {LoginPage} from "../login/login";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {User} from "../../app/core/models/user.model";

export interface AppState {
  user: User
}

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user: Observable<User>;

  constructor(public navCtrl: NavController,
              public authService: AuthService,
              public store: Store<AppState>) {

    this.user = this.store.select('user');
  }

  logout() {
    this.authService.logout().then(() => {
      this.navCtrl.push(LoginPage);
    });
  }
}
