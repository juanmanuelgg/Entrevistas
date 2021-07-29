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
  public faEdit: IconDefinition = faEdit;
  public faCommentDots: IconDefinition = faCommentDots;
  public faBatteryFull: IconDefinition = faBatteryFull;
  public faBatteryHalf: IconDefinition = faBatteryHalf;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  public limit: number = 7;

  constructor(private _todoListService:TodoListService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._todoListService.getTodoList().then(lists => this.lists = lists);

    this.items = [
      { label: 'Categoria' },
    ];
  }

  public archiveTodoList(): void {
    let snackBarRef = this._snackBar.open('¡Todo-List archivada!', 'Deshacer', {
      duration: 5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });

    let triggered: boolean = false;
    snackBarRef.onAction().subscribe(() => {
      triggered = true;
      this._snackBar.open('¡Acción revertida!', '', {
        duration: 5000, horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    });
  }

  public deleteTodoList(): void {
    this._snackBar.open('¡Todo-List eliminada!', '', {
      duration: 5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  public newTodoList(): void {
    this._snackBar.open('¡Todo-List Creada!', '', {
      duration: 5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}