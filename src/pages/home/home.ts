import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from '../oauth/oauth.service';
import { OAuthProfile } from '../oauth/models/oauth-profile.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: OAuthProfile;
  constructor(public navCtrl: NavController,private oauthService: OAuthService) {
    this.oauthService = oauthService;
		oauthService.getProfile()
			.then(profile => this.profile = profile);
  }

}
