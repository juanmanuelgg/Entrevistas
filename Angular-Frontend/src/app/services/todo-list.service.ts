import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get<any>('assets/showcase/data/todo-lists.json')
      .toPromise()
      .then(res => <TodoList[]>res.data)
      .then(data => { return data; });
  }
}