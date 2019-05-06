import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'users',
        component: UserComponent
      },
      {
        path: 'albums',
        component: AlbumComponent
      },
      {
        path:'users/:id',
        component: UserComponent
      },
      {
        path:'albums:/name',
        component: UserComponent
      }
    ], 
    //canActivate: [OktaAuthGuard]
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
