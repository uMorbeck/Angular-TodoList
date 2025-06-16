import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-data',
  imports: [ReactiveFormsModule, MatButton],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  userData = JSON.parse(localStorage.getItem('login')!)
  @Output() update = new EventEmitter<any>();

  updateForm = new FormGroup({
    username: new FormControl(this.userData.username),
    password: new FormControl(this.userData.password)
  })

  handleUpdate() {
    if(
      this.updateForm.value.username?.trim() !== this.userData.username ||
      this.updateForm.value.password?.trim() !== this.userData.password
    ) {
      this.update.emit(this.updateForm.value);
      this.updateForm.reset();
    }
  }
}
