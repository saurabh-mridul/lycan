import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private oktaAuthService: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }

  login() {
    this.oktaAuthService.loginRedirect();
  }

  logout() {
    this.oktaAuthService.logout('/');
  }
}
