import { Injectable } from '@angular/core';
import { cv } from '../mocks/cv.mock';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cv: Cv = cv;

  constructor() {
  }

  getCv(): Cv {
    return this.cv;
  }
}
