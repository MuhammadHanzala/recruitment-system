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
import { ForgotComponent } from './forgot/forgot.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth.service';
import { LoggedInGuardService } from './logged-in-guard.service';

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
    SignupComponent,
    ForgotComponent,
    AdminComponent,
    DashboardComponent,
    CompanyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [
    AuthService,
    LoggedInGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
