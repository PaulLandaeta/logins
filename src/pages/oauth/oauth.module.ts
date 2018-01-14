import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OAuthProvidersListPage } from './list/oauth-providers.list.page';
import { OAuthService } from './oauth.service';
import { FacebookOauthProvider } from './facebook/facebook-oauth.provider';

@NgModule({
  declarations: [
    OAuthProvidersListPage
  ],
  entryComponents: [
    OAuthProvidersListPage
  ],
  imports: [
    IonicPageModule.forChild(OAuthProvidersListPage),
  ],
  providers:[
    OAuthService,
    FacebookOauthProvider
  ]
})
export class OauthPageModule {
  
}
