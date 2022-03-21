import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { api_key } from '../../models/api_key';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  searchGif(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `${environment.server_url}gifs/search?api_key=${api_key}&q=${searchTerm}&limit=25&offset=0&rating=pg-13&lang=en`
    );
  }

  trendingGif(): Observable<any> {
    return this.http.get<any>(
      `${environment.server_url}gifs/trending?api_key=${api_key}&limit=25&offset=0&rating=pg-13&lang=en`
    );
  }
}
