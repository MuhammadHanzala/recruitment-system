import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDP0gAeDEmW5mk3SqgpESWm3Pg0g7CGWtw',
  authDomain: 'recruitment-system-aa7a3.firebaseapp.com',
  databaseURL: 'https://recruitment-system-aa7a3.firebaseio.com',
  storageBucket: 'recruitment-system-aa7a3.appspot.com',
  messagingSenderId: '85411421322'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
