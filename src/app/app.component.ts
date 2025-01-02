import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'level-1';
  todoList = [
    { name: 'Task 1', status: 'done' },
    { name: 'Task 2', status: 'done' },
    { name: 'Task 3', status: 'done' },
    { name: 'Task 4', status: 'done' },
    { name: 'Task 5', status: 'done' },
    { name: 'Task 6', status: 'done' },
    { name: 'Task 7', status: 'done' },
    { name: 'Task 8', status: 'done' },
    { name: 'Task 9', status: 'done' },
    { name: 'Task 10', status: 'done' },
  ];
}
