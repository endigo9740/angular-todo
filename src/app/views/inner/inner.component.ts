import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService, Todo } from 'src/app/services/todos.service';

@Component({
    selector: 'app-inner',
    templateUrl: './inner.component.html',
    styleUrls: ['./inner.component.scss']
})
export class InnerComponent implements OnInit {
    public todoDetails: Todo = { userId: 0,  id: 0, title: 'Default Text', completed: false };

    constructor(
        private activatedRoute: ActivatedRoute,
        private todoService: TodoService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.todoService.getTodoDetails(params.id).subscribe((res: Todo) => this.todoDetails = res);
        });
    }

}
