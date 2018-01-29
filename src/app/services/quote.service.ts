import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Quote } from '../domain/quote.module';

@Injectable()
export class QuoteService {
  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}

  getQuote(): Observable<Quote> {
    const url = `${this.config.baseUrl}/quotes/${Math.floor(
      Math.random() * 10,
    )}`;
    return this.http.get(url).map(response => response.json());
  }
}
