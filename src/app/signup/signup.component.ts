import { Component, OnInit } from '@angular/core';
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

  constructor(public fb: AngularFire) {
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
        alert(data);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ...
      });
  }

}
