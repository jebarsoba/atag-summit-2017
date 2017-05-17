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

  getSessions(): Array<any>{
   return [
    {"Activity": "Reception","Day": "Friday","End": "9:00","Votes": 0,"Type": "FreeTime","Start": "8:30"},
    {"Hosts": ["pablo", "fer"],"Activity": "Some talk","Day": "Friday","End": "9:20","Votes": 3,"Type": "Talk","Start": "9:00"},
    {"Hosts": ["fergek"],"Activity": "Another talk","Day": "Friday","End": "10:20","Votes": 5,"Type": "Talk","Start": "9:20"}
   ];
  }

  /*//llamada al endpoint to get sessions
  getSessions(): Observable<any> {
    return this.http.get(this.getSessionsUrl)
                        .map(this.extractSessions)
                        .catch(error => error);
  }*/

  //método privado que parsea la respuesta a JSON
  private extractSessions(res: Response) {
    const response = res.json();
    const body = JSON.parse(response.body);
    return body.Items || { };
  }
}
