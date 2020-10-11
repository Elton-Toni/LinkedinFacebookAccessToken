import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BaseSocialService } from '../services/base-social.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService extends BaseSocialService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getLinkedinAccessToken(accessTokenUrl: string) {
    // console.log(accessTokenUrl)

    let response = this.getAccessToken<any>(this.http, accessTokenUrl).pipe();
    console.log(response)
    return response;
  }

}
