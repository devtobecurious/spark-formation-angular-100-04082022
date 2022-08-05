import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string, ...optionalParams: any[]) {
    if (! environment.production) {
      console.time('test');
      console.info(message, optionalParams);
      console.timeEnd('test');
    }
  }
}
