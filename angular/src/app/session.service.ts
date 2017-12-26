import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {
  private getSessionsUrl = '[Your API Gateway URL here]';

  constructor(private http: Http) { }

  getSessions(): Observable<any> {
    return this.http.get(this.getSessionsUrl)
                    .map(this.extractSessions)
                    .catch(error => error);
  }

  private extractSessions(res: Response) {
    return res.json() || { };
  }
}
