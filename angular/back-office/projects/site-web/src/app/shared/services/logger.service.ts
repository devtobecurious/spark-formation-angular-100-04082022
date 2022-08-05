import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type Logger = {
  log: (message: string, ...optionalParams: any[]) => void;
}

export class ApiLoggerService {
  log(message: string, ...optionalParams: any[]): void {
    throw new Error('Oops, l\'api n\'est pas disponible');
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => { return environment.production ? new ApiLoggerService() : new LoggerService(); }
})
export class LoggerService {

  constructor() {
    this.log('LoggerService constructed');
  }

  log(message: string, ...optionalParams: any[]): void {
    if (! environment.production) {
      console.time('test');
      console.info(message, optionalParams);
      console.timeEnd('test');
    }
  }
}
