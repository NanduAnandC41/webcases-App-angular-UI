import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  isLoggedIn = false;
  username?: string;

  constructor(private router: Router) {}

  redirectToDashboardPage(): void{
    this.router.navigate(['/dashboard']);
  }

  redirectToLoginPage():void {
    this.router.navigate(['/login']);
  }

  logout(): void {

    window.location.reload();
  }
}
