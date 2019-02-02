import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Animation } from './animation';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private http: HttpClient) { }

  toggleAnimation(neopixelId: number, animation: string): Observable<any> {
    return this.http
      .put<any>(`http://192.168.0.106:5000/api/animation?id=${neopixelId}&animation_name=${animation}`, {})
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  private handleObservableError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
