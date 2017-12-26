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
    this.sessionService.getSessions().subscribe(
    		sessionsResponse => this.sessions = sessionsResponse,
    		error => console.log(<any>error)
    );
  }
}
