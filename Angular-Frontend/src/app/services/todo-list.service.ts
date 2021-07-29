import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoLists() {
    return this.http.get<any>('assets/showcase/data/todo-lists.json')
      .toPromise()
      .then(res => <TodoList[]>res.data);
  }

  getTodoList(id: number) {
    return this.http.get<any>(`assets/showcase/data/list${id}.json`)
      .toPromise()
      .then(res => <TodoList>res );
  }
}