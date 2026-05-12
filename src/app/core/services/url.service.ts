import { Injectable } from '@angular/core';

import {ShortUrlModel} from '../models/short-url.model';
import {CreateShortUrlRequestModel} from '../models/create-short-url-request.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private readonly API_URL = `${environment.apiUrl}/api/urls`;

  constructor(private readonly http: HttpClient) {}

  create(payload: CreateShortUrlRequestModel): Observable<ShortUrlModel> {
    return this.http.post<ShortUrlModel>(this.API_URL, payload);
  }

  listMy(alias?: string): Observable<ShortUrlModel[]> {
    let params = new HttpParams();
    if (alias) {
      params = params.set('alias', alias);
    }
    return this.http.get<ShortUrlModel[]>(`${this.API_URL}/me`, { params });
  }

  delete(id: number): Observable<ShortUrlModel[]> {
    return this.http.delete<ShortUrlModel[]>(`${this.API_URL}/${id}`);
  }
}
