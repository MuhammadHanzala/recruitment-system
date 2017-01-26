import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items$: FirebaseListObservable<any[]>;
  roles: Object;


  constructor(private fb: AngularFire, private authService: AuthService, private router: Router) {

    this.roles = {
      admin: 'admin',
      company: 'company',
      student: 'student'
    };

  }


  signOut() {
    this.authService.unsubscribeUserDetail$();
    this.fb.auth.logout()
      .then(
      data => {
        this.router.navigate(['/login'])
      },
      error => console.log('Error in Logout', error)
      );
  }


  dashboard() {
    console.log(this.fb.auth.getAuth());
    if (this.authService.getUser()) this.router.navigate(['/' + this.roles[this.authService.getUserDetail().type]]);
  }
  isLoggedIn(){
    return !!this.authService.getUser();
  }
}
