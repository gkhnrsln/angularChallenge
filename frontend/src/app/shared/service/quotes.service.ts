import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/model/quote';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private readonly apiURL = 'https://api.api-ninjas.com/v1';
  private readonly apiKey = environment.apiKey;
  
  private readonly http = inject(HttpClient);

  getQuotes(): Observable<Quote[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<Quote[]>(`${this.apiURL}/quotes`, { headers });
  }

}
