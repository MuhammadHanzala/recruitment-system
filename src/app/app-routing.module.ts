import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { LoggedInGuardService } from './logged-in-guard.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children: []
  },
  {
    path: 'signup', component: SignupComponent, children: []
  },
  {
    path: 'student', component: DashboardComponent, children: [],
    canActivate: [LoggedInGuardService]
  },
  {
    path: 'company', component: CompanyComponent, children: [],
    canActivate: [LoggedInGuardService]
  },
  {
    path: 'admin', component: AdminComponent, children: [],
    canActivate: [LoggedInGuardService]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
