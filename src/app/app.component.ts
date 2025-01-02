import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  id = 100;
  // o	Hiển thị danh sách công việc từ một mảng dữ liệu tĩnh trong Component
  todoList = [
    { id: 0, name: 'Task 1', status: '1' },
    { id: 1, name: 'Task 2', status: '1' },
    { id: 2, name: 'Task 3', status: '0' },
    { id: 3, name: 'Task 4', status: '1' },
    { id: 4, name: 'Task 5', status: '0' },
    { id: 5, name: 'Task 6', status: '0' },
    { id: 6, name: 'Task 7', status: '0' },
    { id: 7, name: 'Task 8', status: '0' },
    { id: 8, name: 'Task 9', status: '0' },
  ];
  undoneList = this.todoList.filter((todo) => todo.status === '0');
  doneList = this.todoList.filter((todo) => todo.status === '1');

  constructor() {}

  addTodoList(text: string) {
    console.log(text);
    this.id++;
    this.todoList.push({ id: this.id, name: text, status: '0' });
    this.undoneList.push({ id: this.id, name: text, status: '0' });
  }

  markAsDone(todoId: number) {
    const todo = this.todoList.find((t) => t.id === todoId);
    if (todo) {
      todo.status = '1';
      this.doneList.push(todo);
      this.undoneList = this.undoneList.filter((t) => t.id !== todoId);
    }
  }
}
