/*
 * Copyright (C) 2021 Juan Manuel González Garzón
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './todo-list';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoLists() {
    return this.http.get<any>(`${environment.api_server}/api/todo_list`)
      .toPromise()
      .then(res => <TodoList[]>res);
  }

  getTodoList(id: number) {
    return this.http.get<any>(`${environment.api_server}/api/todo_list/${id}`)
      .toPromise()
      .then(res => <TodoList>res);
  }
}