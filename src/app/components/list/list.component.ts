import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatIconButton, MatIcon, MatCard, MatCardContent, MatCheckbox],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() todos: any[] = [];
  @Output() toggleStatus = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();
}
