import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  providers: [ SessionService ]
})
export class SessionsComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.getSessions();
  }

  sessions: Array<any>;

  getSessions() {
    this.sessions = this.sessionService.getSessions();

    /*this.sessionService.getSessions().subscribe(
    		sessionsResponse => this.sessions = sessionsResponse,
    		error => console.log(<any>error)
    );*/

   /*this.sessions = [
     {"Activity": "Reception","Day": "Friday","End": "9:00","Votes": 0,"Type": "FreeTime","Start": "8:30"},
     {"Hosts": ["pablo", "fer"],"Activity": "Some talk","Day": "Friday","End": "9:20","Votes": 3,"Type": "Talk","Start": "9:00"},
  	 {"Hosts": ["fergek"],"Activity": "Another talk","Day": "Friday","End": "10:20","Votes": 5,"Type": "Talk","Start": "9:20"}
    ];*/
  }

}
