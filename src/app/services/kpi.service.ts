import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  private apiUrl = 'http://localhost:8000/kpi/'; // API endpoint

  constructor(private http: HttpClient) { }

  getKpiData(): Observable<any> {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.apiUrl + 'kpi/', { headers });
  }
}
