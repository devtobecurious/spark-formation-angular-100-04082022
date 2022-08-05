import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apis } from 'projects/site-web/src/environments/api';
import { Observable } from 'rxjs';

export interface People {
  surname: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<People[]> {
    return this.httpClient.get<People[]>(apis.people.url);
  }
}
