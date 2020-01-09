import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected http: HttpClient) { }
  callApi(url, body, option?) {
    let request = { ...body };
    return this.http.post(`${environment.api}/${url}`, request, option).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  get(url) {
    return this.http.get(`${environment.api}/${url}`).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  put(url, user) {
    return this.http.put(`${environment.api}/${url}`, user).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  protected handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
}
