import {HomePage} from '../../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'page-oauth',
  templateUrl: 'oauth-providers.list.html',
})
export class OAuthProvidersListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private oauthService: OAuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OauthPage');
  }

  public login(source: string) {
    this.oauthService.login(source).
    then(
      (OAuthToken)=> this.navCtrl.setRoot(HomePage)
    );
  }
}
