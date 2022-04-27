import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth-guard.service';
import { TokenGuard } from './_auth/token-guard.service';


const routes: Routes = [
  {
    path: "",
    canActivate: [TokenGuard],
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "login",
    canActivate: [TokenGuard],
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "signup",
    canActivate: [TokenGuard],
    loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: "browsejob",
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/browsejob/browsejob.module').then(m => m.BrowsejobModule)
  },
  {
    path: "jobdetails/:id",
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/jobdetails/jobdetails.module').then(m => m.JobdetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
