import {Injectable} from "@angular/core";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {IUser} from "../models/user.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../pages/home/home";

import * as UserActions from '../actions/user.actions';

@Injectable()
export class AuthService {
  constructor(private fb: Facebook,
              private store: Store<AppState>) {

  }

  login(): Promise<FacebookLoginResponse> {
    return this.fb.login(['public_profile', 'user_friends', 'email']);
  }

  isLoggedIn(): Promise<any> {
    return this.fb.getLoginStatus();
  }

  logout(): Promise<any> {
    return this.fb.logout().then(() => {
      console.log('logged out');
    });
  }

  getUserDetail(userid: string): Promise<any> {
    return this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then((user: IUser) => {
        this.store.dispatch(new UserActions.UpdateUser(user));
      })
  }
}
