import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { UserDataComponent } from '../../components/user-data/user-data.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-user',
  imports: [HeaderComponent, UserDataComponent, FooterComponent],
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
