import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseSocialService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': `application/json, text/plain, */*`,
      'Content-Security-Policy': `script-src 'self'`,
      'Access-Control-Allow-Origin': `*`,
      'Access-Control-Allow-Headers': `Content-Type`,
      'Access-Control-Allow-Methods': `POST`
    })
  };
  // 'Accept': `application/vnd.api+json`,

  constructor(public http: HttpClient) { }

  protected getAccessToken<T>(http: HttpClient, url: string) {
    return http.post<T>(url, this.httpOptions).pipe();
  }
}
