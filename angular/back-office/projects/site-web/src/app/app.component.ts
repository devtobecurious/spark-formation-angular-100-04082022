import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-web';

  constructor(private logger: LoggerService) {
    this.logger.log('AppComponent constructed');
  }
}
