import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { UserDataComponent } from '../../components/user-data/user-data.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [HeaderComponent, UserDataComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router) {}

  handleUpdate(update: any) {
    localStorage.setItem('login', JSON.stringify(update));
    this.router.navigate(['/todolist']);
  }
}
