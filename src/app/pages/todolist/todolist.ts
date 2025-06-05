import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
  todos = new Array();
  id = 0;

  todoForm = new FormGroup({
    todo: new FormControl('')
  })

  handleSubmit() {
    this.todos.push({
      id: this.id,
      todo: this.todoForm.value.todo,
      status: false
    })
    this.id++
  }

  handleStatus(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? {...todo, status: !todo.status} : todo
    );
  }

  handleDelete(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
