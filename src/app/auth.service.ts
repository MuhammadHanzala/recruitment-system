import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable()
export class AuthService {


  user: Object;
  userDetail: any;
  userDetail$: any;


  constructor(public fb: AngularFire, private router: Router) {
    console.log('AUTH SERVICE');
    let state = this.fb.auth.subscribe(
      data => {
        if (data) {
          this.setUser(data);
          
          let userDetailS = this.fb.database.object('/users/' + data.uid, { preserveSnapshot: true });
          this.userDetail$ = userDetailS.subscribe(snapshot => {
            this.userDetail = snapshot.val();
          });
        }
        else {
          this.setUser(null);
          if(this.userDetail$) this.userDetail$.unsubscribe();
        }
      },
      error => {
        console.log('User Logged In Error', error)
      }
    );
  }

  setUser(user): void {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
  setUserDetail(userDetail): void {
    this.userDetail = userDetail;
  }
  getUserDetail() {
    return this.userDetail;
  }
  unsubscribeUserDetail$(){
    if(this.userDetail$) this.userDetail$.unsubscribe();
  }



}
