import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() addTodo = new EventEmitter<string>();

  todoForm = new FormGroup({
    todo: new FormControl('')
  });

  handleSubmit() {
    if (this.todoForm.value.todo?.trim()) {
      this.addTodo.emit(this.todoForm.value.todo!);
      this.todoForm.reset();
    }
  }
}
