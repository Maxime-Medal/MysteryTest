import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, concatWith, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salarie } from '../Models/salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
  public salaries: Salarie[] = [];
  public salaries$ = new BehaviorSubject<Salarie[]>(null)
  private salarieUrl = `${environment.apiUrl}/Salaries`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private _http: HttpClient
  ) {
    this.getSalaries().subscribe();
  }

  public getSalaries(): Observable<Salarie[]> {
    return of(this.salaries)
      .pipe(
        concatWith(this._http.get<Salarie[]>(this.salarieUrl)),
        tap((p) => {
          this.salaries = p;
          this.salaries$.next(p);
        })
      );
  }

  public sendSalarie(salarie: Salarie): Observable<Salarie> {
    return this._http.post<Salarie>(this.salarieUrl, salarie);
  }
}
