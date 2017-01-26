import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  job: any = {};
  // jobs$: any;
  jobs$: FirebaseListObservable<any>;
  newJob = {
    title: '',
    positions: '',
    description: '',
    id: '',
    name: ''
  }


  constructor(private fb: AngularFire, private authService: AuthService) {
    this.jobs$ = this.fb.database.list('/jobs', {
      query: {
        orderByChild: 'id',
        equalTo: authService.getUser()['uid']
      }
    });
  }

  ngOnInit() {
  }

  addJob() {
    this.newJob.id = this.authService.getUser()['uid']
    this.newJob.name = this.authService.getUserDetail()['fullname']
    console.log(this.newJob);
    console.log(this.jobs$);
    this.jobs$.push(this.newJob);
    this.newJob = { title: '', positions: '', description: '', id: '', name: '' }
  }


  findUser(email) {
    console.log(this.jobs$);
    // return new Promise(function (resolve, reject) {
    // this.fb.database.list('/jobs', {
    //   query: {
    //     orderByChild: 'email',
    //     equalTo: 'company@a.com'
    //   }
    // })
    // .orderByChild('email')
    // .startAt(email)
    // .endAt(email)
    // .once('value', function (snap) {
    //   var foundUser = snap.val();
    //   if (foundUser) {
    //     resolve(foundUser);
    //   } else {
    //     reject("User not found!");
    //   }
    // });
    // });
  }

}
