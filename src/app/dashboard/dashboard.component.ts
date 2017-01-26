import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(private fb: AngularFire) {
    fb.database.list('/jobs')
      .subscribe(data => {
        console.log(data);
        this.jobs$ = data;
      });
  }

  ngOnInit() {
  }

  apply(job) {
    console.log(job);
    this.job = job;
  }



}
