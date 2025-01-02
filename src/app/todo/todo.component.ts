import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo = { name: '', status: '', id: 0 };
  @Output() markAsDone = new EventEmitter<number>();
  onMarkAsDone() {
    this.markAsDone.emit(this.todo.id);
  }
}
