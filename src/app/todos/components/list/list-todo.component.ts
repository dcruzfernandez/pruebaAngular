import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'list-todo.component.html'
})
export class ListTodosComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private todosService: TodoService) {}

    ngOnInit() {
    // Llamar al servicio para obtener los "todos"
        this.todosService.getTodos().subscribe((data: Todo[]) => {
        this.todos = data;
        });
    }
}