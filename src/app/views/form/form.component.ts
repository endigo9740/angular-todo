import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService, Todo } from 'src/app/services/todos.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public formValues: Todo = {
        // --- (hardcoded) ---
        userId: 0,
        id: 0,
        completed: false,
        // --- / ---
        title: '',
    };

    constructor(
        private router: Router,
        private todoService: TodoService
    ) {}

    ngOnInit(): void {}

    submit(): void {
        // Validate to prevent empty title value
        if (!this.formValues.title) { return; }
        // Submit formValues as payload to service createTodos() method
        this.todoService.createTodo(this.formValues).subscribe(res => {
            // On success, use @angular > Router to naviate to desired route
            // NOTE: JSONPlaceholder ID returned for POST response is always
            // `id: 201` and the GET call for this will fail with status 404
            this.router.navigate(['/inner', res.id]);
        });
    }
}
