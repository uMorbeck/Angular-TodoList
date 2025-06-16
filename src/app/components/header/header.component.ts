import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButton, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Input() route = ''
  @Input() routeLink = ''
  userData = JSON.parse(localStorage.getItem('login')!);
  username = this.userData.username

  handleLogout() {
    localStorage.removeItem('login');
    this.username = '';
    this.router.navigate(['/'])
  }
}
