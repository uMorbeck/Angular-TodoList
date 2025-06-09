import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-home',
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  handleLogin(login: any) {
    localStorage.setItem('login', JSON.stringify(login))
    this.router.navigate(['/todolist'])
  }
}
