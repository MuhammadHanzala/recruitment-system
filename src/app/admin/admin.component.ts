import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  companies$;
  students$;
  constructor(private fb: AngularFire, private authService: AuthService) {

    this.companies$ = this.fb.database.list('/users', {
      query: {
        orderByChild: 'type',
        equalTo: 'company'
      }
    });
    
    this.students$ = this.fb.database.list('/users', {
      query: {
        orderByChild: 'type',
        equalTo: 'student'
      }
    });

  }

  ngOnInit() {
  }

}
