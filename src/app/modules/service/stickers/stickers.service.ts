import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { api_key } from './../../models/api_key';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  constructor(private http: HttpClient) {}

  searchSticker(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `${environment.server_url}stickers/search?api_key=${api_key}&q=${searchTerm}&limit=25&offset=0&rating=pg-13&lang=en`
    );
  }

  trendingSticker(): Observable<any> {
    return this.http.get<any>(
      `${environment.server_url}stickers/trending?api_key=${api_key}&limit=25&offset=0&rating=pg-13&lang=en`
    );
  }
}
