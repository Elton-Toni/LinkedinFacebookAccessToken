import { Component, OnInit } from '@angular/core';
import { Linkedin } from '../../classes/linkedin';
import { SocialService } from '../../services/social.service';
import { Scopes } from '../../enums/linkedin.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  //#region LABELS
  public labelSelectAccount: string = 'Linkedin Accounts';
  // public labelUsername: string = 'Username';
  // public labelClientId: string = 'Client Id';
  public labelAccessToken: string = 'Access Token';
  // public labelRefreshToken: string = 'Refresh Token';
  public labelAuthorizationCode: string = 'Authorization Code'
  public labelExpiresIn: string = 'Expires In'
  public labeluserCancelledLogin: string = 'The member declined to log in to their LinkedIn account'
  public labeluserCancelledAuthorize: string = 'The member refused to authorize the permissions request from your application'
  //#endregion

  public httpsAuthorization: string;
  public social: string;
  public username: string;
  public responseType: string;
  public clientId: string;
  public redirectUrl: string;
  public state: string;
  public scopes: string = '';
  public secret: string;
  public grantType: string;
  public httpsAccessToken: string;

  public linkedinAccounts: Linkedin[] = [];
  private authorizations = Scopes;
  private response: any;

  public authorizationCode: string = undefined;
  public errorDescription: string = undefined;
  public userCancelledLogin: string;
  public userCancelledAuthorize: string;
  public accessToken: string = undefined;
  public expiresIn: string = undefined;
  public getAuthorizationUrl: string = '';
  public getAccessTokenUrl: string = '';

  constructor(private socialSrv: SocialService, private route: ActivatedRoute) {
    this.authorizationCode = this.route.snapshot.queryParamMap.get('code');
    this.errorDescription = this.route.snapshot.queryParamMap.get('error_description');
    this.userCancelledLogin = this.route.snapshot.queryParamMap.get('user_cancelled_login');
    this.userCancelledAuthorize = this.route.snapshot.queryParamMap.get('user_cancelled_authorize');
    this.state = this.route.snapshot.queryParamMap.get('state');

    this.httpsAuthorization = 'https://www.linkedin.com/oauth/v2/authorization';
    this.httpsAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';
    this.social = 'Linkedin';
    this.username = 'el-toni_19@hotmail.com';
    this.responseType = 'code';
    this.clientId = '773byousxfipoo';
    this.redirectUrl = 'http://localhost:4200/linkedin';
    this.state = 'RandomStateString';
    this.scopes = this.getScopes();
    this.secret = 'LoqodGv9xa1oC0FX';
    this.grantType = 'authorization_code';


    this.getAuthorizationUrl = this.httpsAuthorization +
      '?response_type=' + this.responseType +
      '&client_id=' + this.clientId +
      '&redirect_uri=' + this.redirectUrl +
      '&scope=' + this.scopes;


    // '&redirect_uri=' + redirectUrl +
    this.getAccessTokenUrl = this.httpsAccessToken +
      '?grant_type=' + this.grantType +
      '&client_id=' + this.clientId +
      '&client_secret=' + this.secret +
      '&code=' + this.authorizationCode;
  }

  ngOnInit(): void {

    // https, social, username, responseType, clientId, redirectUrl, state, scope, secret
    this.linkedinAccounts.push(
      new Linkedin(this.httpsAccessToken, this.social, this.username, this.responseType, this.clientId, this.redirectUrl, this.state, this.scopes, this.secret),
      new Linkedin(this.httpsAccessToken, this.social, this.username, this.responseType, this.clientId, this.redirectUrl, this.state, this.scopes, this.secret),
    );
  }

  //#region PUBLIC METHODS
  public getAccessToken() {
    this.socialSrv.getLinkedinAccessToken(this.getAccessTokenUrl).subscribe({
      next: result => {
        this.response = result;
    },
    error: error => {
        console.error('There was an error!', error);
        console.error('Error message: ', error.message);
    }
    });
  }
  //#endregion

  //#region Private Methods
  private getScopes(): string {
    for (let scope in this.authorizations) {
      if (isNaN(Number(scope))) {
        this.scopes += scope + ' ';
      }
    }
    // console.log(this.scopes);
    return this.scopes.trim();
  }
  //#endregion

}
