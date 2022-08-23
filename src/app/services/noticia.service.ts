import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    console.log(parametros.pais);
    const URL = 'https://gnews.io/api/v4/top-headlines?country='
      + parametros.pais
      + '&topic='
      + parametros.categoria +
      '&token=6dc5307775429324db7c155cd9e2095f';

    return this.http.get(URL);
  }
}
