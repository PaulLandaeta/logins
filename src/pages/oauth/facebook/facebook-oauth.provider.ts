import { Injectable } from '@angular/core';
import { IOathProvider } from '../oauth.providers.interface';
import {FacebookLoginResponse, Facebook} from '@ionic-native/facebook';
import { OAuthProfile } from '../models/oauth-profile.model';

@Injectable()
export class FacebookOauthProvider implements IOathProvider {
    constructor(private fb: Facebook) {

    }
    login(): Promise<string> {
        return this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => res.authResponse.accessToken);
    }
    getProfile(accessToken): Promise<OAuthProfile> {
        return this.fb.api('/me?fields=id,name,email,picture.type(normal),gender,first_name,last_name',['public_profile', 'user_friends', 'email'])
        .then( s =>{
            let profile: OAuthProfile = {
                firstName: s.first_name,
                lastName: s.last_name,
                email: s.email,
                provider: 'facebook',
                pictureProfile:s.picture.data.url};
                return profile;
          })
	}
}