import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse   } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { IAmigo } from './IAmigo';

@Injectable()
export class AmigoService {

    //private url = 'http://localhost:8081/amigo/all';
    //private url_post = 'http://localhost:8081/amigo/add';

    private url = '/api/amigo/all';

    constructor(private http: HttpClient) {    }

    getAmigos() {
      return this.http
      .get<IAmigo[]>(this.url)
      .pipe(map(data => data),
      catchError(this.errorHandler));
      }

      getAmigosAlert(): Observable<IAmigo[]> {
        return this.http.get<IAmigo[]>(this.url)
                        .pipe(tap(data => alert(JSON.stringify(data))) ,
                        catchError(this.errorHandler));
      }

      errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.message || "Erro no servidor");
      }

      createAmigo(amigo: IAmigo): Observable<IAmigo> {
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');
        const options = {
            headers: httpHeaders
        };
        return this.http.post<IAmigo>(this.url, amigo, options);
    }

    postAmigo(amigo: IAmigo): Observable<HttpResponse<IAmigo>> {
      const httpHeaders = new HttpHeaders({
           'Content-Type' : 'application/json'
      });
      return this.http.post<IAmigo>(this.url, amigo,
          {
            headers: httpHeaders,
            observe: 'response'
          }
      );
  }

}
