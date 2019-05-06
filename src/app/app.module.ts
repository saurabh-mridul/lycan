import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivityComponent } from './activity/activity.component';
import { ErrorComponent } from './error/error.component';
import { HttpErrorInterceptor } from './services/http-error-interceptor';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { FilterPipe } from './filter.pipe';
import { OktaAuthModule } from '@okta/okta-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ActivityComponent,
    ErrorComponent,
    LoginComponent,
    DetailsComponent,
    UserComponent,
    AlbumComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-932728.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oako2ee5sbttEBhj0h7'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
