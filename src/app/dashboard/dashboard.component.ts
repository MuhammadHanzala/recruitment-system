import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  jobs$: any;
  job: any = {
    title: '',
    name: '',
    positions: '',
    postedat: '',
    description: ''
  };

  constructor(private fb: AngularFire, private authService: AuthService) {
    fb.database.list('/jobs')
      .subscribe(data => {
        console.log(data);
        this.jobs$ = data;
      });
  }

  ngOnInit() {
  }

  canApply(job) {
    
  }  
  apply(job) {
    console.log(job);
    const items = this.fb.database.list('/job/' + job.$key + '/request');
    items.push({
      id: this.authService.getUser()['uid'],
      name: this.authService.getUserDetail()['fullname']
    });

    
    this.job = job;
  }



}
