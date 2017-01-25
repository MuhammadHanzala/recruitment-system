import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(public fb: AngularFire) {
    this.email = 'adnanshurta@gmail.com'
    this.password = 'adnanshurta@gmail.com'
  }

  ngOnInit() {
  }
  login() {
    console.log(this.email, ' ', this.password)
    // Email and password
    this.fb.auth.login({
      email: this.email,
      password: this.password,
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then(data => console.log('Login', data))

  }

}
