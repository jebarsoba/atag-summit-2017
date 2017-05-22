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
     {"Day": "Friday", "Start": "09.20", "End": "10.00", "Activity": "Transformation to an intelligent enterprise", "Type": "Talk", "Votes": 48},
     {"Day": "Friday", "Start": "10.00", "End": "11.40", "Activity": "AWS DynamoDB", "Type": "Talk + Workshop", "Votes": 48},
     {"Day": "Friday", "Start": "11.40", "End": "12.40", "Activity": "Cloud computing", "Type": "Talk", "Votes": 48},
     {"Day": "Friday", "Start": "14.30", "End": "15.30", "Activity": "AWS API Gateway", "Type": "Talk + Workshop", "Votes": 48},
     {"Day": "Friday", "Start": "14.30", "End": "15.30", "Activity": "AWS Lambda", "Type": "Talk + Workshop", "Votes": 48},
     {"Day": "Friday", "Start": "16.50", "End": "17.30", "Activity": "Hybrid storage solutions", "Type": "Talk", "Votes": 48},
     {"Day": "Saturday", "Start": "09.00", "End": "09.45", "Activity": "Introduction to Angular 2 / Architecture patterns on SPA", "Type": "Talk + Workshop", "Votes": 48},
     {"Day": "Saturday", "Start": "11.15", "End": "12.50", "Activity": "AWS IoT", "Type": "Talk + Demo", "Votes": 48},
     {"Day": "Saturday", "Start": "14.30", "End": "15.00", "Activity": "Cloud vision for the future", "Type": "Talk", "Votes": 48},
     {"Day": "Saturday", "Start": "15.00", "End": "15.40", "Activity": "Intigua, Present and future", "Type": "Talk", "Votes": 48},
     {"Day": "Saturday", "Start": "15.40", "End": "16.10", "Activity": "AWS CodePipeline", "Type": "Talk + Demo", "Votes": 48}
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
