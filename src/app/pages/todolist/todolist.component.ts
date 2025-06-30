import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ListComponent } from '../../components/list/list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-todolist',
  imports: [FormComponent, ListComponent, HeaderComponent, FooterComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos = new Array();
  id = 0;

  handleAdd(todoText: string) {
    this.todos.push({
      id: this.id,
      todo: todoText,
      status: false
    });
    this.id++;
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
