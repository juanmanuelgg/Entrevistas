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
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { faPlus, faEdit, IconDefinition, faCommentDots, faBatteryFull, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { TodoListService } from '../services/todo-list.service';
import { TodoList } from '../services/todo-list';

@Component({
  selector: 'app-group-todo-board',
  templateUrl: './group-todo-board.component.html',
  styleUrls: ['./group-todo-board.component.scss']
})
export class GroupTodoBoardComponent implements OnInit {
  public lists: TodoList[] = [];
  public items: MenuItem[] = [];
  public faPlus: IconDefinition = faPlus;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private _todoListService:TodoListService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._todoListService.getTodoLists().then(lists => this.lists = lists);

    this.items = [
      { label: 'Categoria' },
    ];
  }

  public newTodoList(): void {
    this._snackBar.open('¡Todo-List Creada!', '', {
      duration: 5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}