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

  getAnimationsByNeopixelId(neopixelId: number): Observable<Animation[]> {
    return this.http
      .get<Animation[]>(`http://192.168.0.106:5000/api/animation?id=${neopixelId}`)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  private handleObservableError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
