import {HomePage} from '../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OAuthProvidersListPage } from '../pages/oauth/list/oauth-providers.list.page';
import { OAuthService } from '../pages/oauth/oauth.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OAuthProvidersListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private oauthService:OAuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let env = this;
      if(this.oauthService.isAuthorized()){
        this.rootPage = HomePage
        splashScreen.hide();
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

