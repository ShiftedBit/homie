import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from "../../app/core/services/auth.service";
import {LoginPage} from "../login/login";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {User} from "../../app/core/models/user.model";

export interface AppState {
  message: string;
  user: User
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
