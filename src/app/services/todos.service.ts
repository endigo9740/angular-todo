import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// NOTE: export here, import wherever the service and data is used
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private baseUrl: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpClient
    ) {}

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
    }

    getTodoDetails(id: string): Observable<Todo> {
        return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
    }

    createTodo(payload: Todo): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/todos`, payload);
    }
}
