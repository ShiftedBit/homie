import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from "../../app/core/services/auth.service";
import {LoginPage} from "../login/login";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

interface AppState {
  message: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message$: Observable<string>;

  constructor(public navCtrl: NavController,
              public authService: AuthService,
              public store: Store<AppState>) {


    this.message$ = this.store.select('message');

  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH' })
  }

  logout() {
    this.authService.logout().then(() => {
      this.navCtrl.push(LoginPage);
    });
  }
}
