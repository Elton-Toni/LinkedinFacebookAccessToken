import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';
import { Facebook } from '../../classes/facebook';
import { Scopes } from '../../enums/facebook.enum';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  //#region LABELS
  public labelSelectAccount: string = 'Facebook Accounts';
  // public labelUsername: string = 'Username';
  // public labelClientId: string = 'Client Id';
  public labelLogin: string = 'Login';
  // public labelAuthorizationCode: string = 'Authorization Code';
  public labelAccessToken: string = 'Access Token';
  // public labelRefreshToken: string = 'Refresh Token';
  //#endregion

  public username: string;
  public scopes: string = '';
  public appId: string;

  public linkedinAccounts: Facebook[] = [];
  private authorizations = Scopes;
  // private response : any;

  constructor(private socialSrv: SocialService) { }

  ngOnInit(): void {

    this.username = 'eltonmema20591@gmail.com';
    this.scopes = this.getScopes();
    this.appId = '643308023039233';


    // username, rappId, scope
    this.linkedinAccounts.push(
      new Facebook(this.username, this.appId, this.scopes),
      new Facebook(this.username, this.appId, this.scopes),
      // new Facebook(https, social, username, responseType, clientId, redirectUrl, state, scopes, secret),
    );
  }

  //#region PUBLIC METHODS
  public checkLoginState(){

  }


  // public generateToken(account: Facebook) {
  //   console.log(account)
  //   this.socialSrv.getLinkedinAuthorizationCode(account.https, account.responseType, account.clientId, account.redirectUrl, account.scopes).subscribe(result => {
  //     this.response = result;
  //   });
  // }


  // public refreshToken(account: Facebook) {

  // }
  //#endregion

  //#region Private Methods
  private getScopes(): string {
    for (let scope in this.authorizations) {
      if (isNaN(Number(scope))) {
        this.scopes += scope + ', ';
      }
    }
    return this.scopes.trim();
  }
  //#endregion
}
