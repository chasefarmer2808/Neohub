import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Neopixel } from './neopixel';
import { Pixel } from './pixel';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NeopixelService {

  constructor(private http: HttpClient) { }

  getNeopixels(): Observable<Neopixel[]> {
    return this.http
      .get<Neopixel[]>(`${environment.neopixelUrl}`)
      .pipe(
        map(neopixels => {
          neopixels.map(neopixel => {
            let i = 0;
            neopixel.pixels.forEach(pixel => {
              pixel.neopixelId = neopixel._id;
              pixel.index = i;
              i++;
            })
          })
          return neopixels;
        })
      )
      .pipe(
        catchError(this.handleObservableError)
      );
  }

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

  updatePixel(pixel: Pixel, color: number[]): Observable<any> {
    let data = {
      _id: pixel.neopixelId,
      index_start: pixel.index,
      index_end: pixel.index,
      r: color[0],
      g: color[1],
      b: color[2]
    };

    return this.http
      .put<any>(`${environment.neopixelUrl}`, data)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  updatePixels(neopixelId: string, indexStart: number, indexEnd: number, color: number[]) {
    let data = {
      _id: neopixelId,
      index_start: indexStart,
      index_end: indexEnd,
      r: color[0],
      g: color[1],
      b: color[2]
    };

    return this.http
      .put<any>(`${environment.neopixelUrl}`, data)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  deleteNeopixel(neopixelId: String): Observable<any> {
    return this.http
      .delete<any>(`${environment.neopixelUrl}?id=${neopixelId}`)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  private handleObservableError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}