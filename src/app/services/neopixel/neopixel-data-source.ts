import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { NeopixelService } from './neopixel.service';
import { Neopixel } from './neopixel';

export class NeopixelDataSource implements DataSource<Neopixel> {
    private neopixelSubject = new BehaviorSubject<Neopixel[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private neopixelService: NeopixelService) {}

    connect(): Observable<Neopixel[]> {
        return this.neopixelSubject.asObservable();
    }

    disconnect(): void {
        this.neopixelSubject.complete();
        this.loadingSubject.complete();
    }

    loadNeopixels() {
        this.loadingSubject.next(true);
        this.neopixelService.getNeopixels()
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(neopixels => {
                this.neopixelSubject.next(neopixels);
            });
    }

    getNeopixels(): Neopixel[] {
        return this.neopixelSubject.getValue();
    }
}
