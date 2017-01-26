import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  item;
  roles: Object;

  constructor(public fb: AngularFire, private router: Router, private authService: AuthService) {
    this.email = 'adnanshurta@gmail.com';
    this.password = '121212';
    this.roles = {
      admin: 'admin',
      company: 'company',
      student: 'student'
    };
  }

  ngOnInit() {
  }
  login() {
    console.log(this.email, ' ', this.password)
    // Email and password
    this.fb.auth.login(
      {
        email: this.email,
        password: this.password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then(data => {
        console.log('Login', data);

        // this.router.navigate(['/' + this.roles[this.authService.getUserDetail()['type']]]);
        console.log(this.authService.getUserDetail());

        this.item = this.fb.database.object('/users/' + data.uid, { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
          this.router.navigate(['/' + this.roles[snapshot.val().type]]);
          this.item.subscribe();
        });
      })
      .catch(error => {
        alert(error.message);
        console.log(error);
      });

  }

}
