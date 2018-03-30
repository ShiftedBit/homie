import {Injectable} from "@angular/core";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";

@Injectable()
export class AuthService {
  constructor(private fb: Facebook) {

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

  getUserDetail(userid) {
    return this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
  }
}
