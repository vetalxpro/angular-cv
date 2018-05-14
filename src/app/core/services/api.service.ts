import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {
  }

  get() {

  }

  post() {

  }

  put() {

  }

  patch() {

  }

  delete() {

  }

  private getUrl( url: string ): string {
    return `${environment.host}${url}`;
  }
}
