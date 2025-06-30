import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CatComponent } from '../cat/cat.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton, CatComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() authenticate = new EventEmitter<any>();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  handleSubmit() {
    if(this.loginForm.value.username?.trim() && this.loginForm.value.password?.trim()) {
      this.authenticate.emit(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
