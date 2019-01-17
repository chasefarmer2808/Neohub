import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Neopixel } from './neopixel';
import { Pixel } from './pixel';

@Injectable({
  providedIn: 'root'
})
export class NeopixelService {

  constructor(private http: HttpClient) { }

  createNeopixel(newNeoPixel: Neopixel): Observable<Neopixel> {
    return this.http
      .post<Neopixel>(`http://192.168.0.106:5000/api/strip?pin=${newNeoPixel.gpioPin}&num_pixels=${newNeoPixel.numPixels}`, {})
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  getNeopixels(): Observable<Neopixel[]> {
    return this.http
      .get<Neopixel[]>('http://192.168.0.106:5000/api/strip')
      // .get<Neopixel[]>('assets/data/data.json')
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  updatePixel(pixel: Pixel): Observable<any> {
    return this.http
      .put<any>(`http://192.168.0.106:5000/api/strip?id=${pixel.neopixelId}&index=${pixel.index}&r=${pixel.color[0]}&g=${pixel.color[1]}&b=${pixel.color[2]}`, {})
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  private handleObservableError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}