import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  name: String;
  email: string;
  password: string;
  selectedType: String;
  type = [
    { value: 'student', viewValue: 'Student' },
    { value: 'company', viewValue: 'Company' }
  ];

  constructor(public fb: AngularFire, private router: Router) {
    this.email = 'adnanshurta@gmail.com'
    this.password = 'password'



  }
  ngOnInit() {

  }
  signup() {
    console.log(this.email, ' ', this.name, ' ', this.selectedType, ' ', this.password);

    this.fb.auth.createUser({ email: this.email, password: this.password })
      .then(data => {
        console.log('SignUP', data);
        // this.router.navigate(['/login']);
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

      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ...
      });
  }

}
