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
    const URL = 'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais
      + '&category='
      + parametros.categoria +
      '&apiKey=f0b1b31a4990475c9ac5629cbccd3110';

    return this.http.get(URL);
  }
}
