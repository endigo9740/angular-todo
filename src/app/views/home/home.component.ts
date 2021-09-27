import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from 'src/app/services/todos.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public todosList: Todo[] = [];
    public search: string = '';

    constructor(
        private todoService: TodoService
    ) {}

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(res => this.todosList = res);
    }

    filteredTodos(): Todo[] {
        return this.todosList.filter(t => {
            return t.title.toLowerCase().includes(
                this.search.toLowerCase()
            )
        });
    }
}
