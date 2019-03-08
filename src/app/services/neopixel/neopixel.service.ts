import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Neopixel } from './neopixel';
import { Pixel } from './pixel';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NeopixelService {

  constructor(private http: HttpClient) { }

  createNeopixel(newNeoPixel: Neopixel): Observable<String> {
    let data = {
      pin: newNeoPixel.gpioPin,
      num_pixels: newNeoPixel.numPixels,
      brightness: 60
    };

    return this.http
      .post<String>(`${environment.neopixelUrl}`, data)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  getNeopixels(): Observable<Neopixel[]> {
    return this.http
      .get<Neopixel[]>('http://192.168.0.106:5000/api/strip')
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  updatePixel(pixel: Pixel): Observable<any> {
    console.log(pixel)
    return this.http
      .put<any>(`http://192.168.0.106:5000/api/strip?id=${pixel.neopixelId}&index_start=${pixel.index}&index_end=${pixel.index}&r=${pixel.color[0]}&g=${pixel.color[1]}&b=${pixel.color[2]}`, {})
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  clearNeopixel(neopixelId: Number): Observable<any> {
    return this.http
      .delete<any>(`http://192.168.0.106:5000/api/strip?id=${neopixelId}`)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  private handleObservableError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}