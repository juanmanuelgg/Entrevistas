import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { MenuItem } from 'primeng/api';

import { faPlus, faEdit, IconDefinition, faCommentDots, faBatteryFull, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

import { TodoListService } from '../services/todo-list.service';
import { TodoList } from '../services/todo-list';

@Component({
  selector: 'app-personal-todo-list',
  templateUrl: './personal-todo-list.component.html',
  styleUrls: ['./personal-todo-list.component.scss']
})
export class PersonalTodoListComponent implements OnInit {
  public inGallery = false;
  public list: TodoList = {
    "id": -1,
    "title": "",
    "sumary": "",
    "tasks": [],
    "deleted": false,
    "archived": false
  };
  @Input() listParameter: TodoList = {
    "id": -2,
    "title": "",
    "sumary": "",
    "tasks": [],
    "deleted": false,
    "archived": false
  };
  public items: MenuItem[] = [];
  public faPlus: IconDefinition = faPlus;
  public faEdit: IconDefinition = faEdit;
  public faCommentDots: IconDefinition = faCommentDots;
  public faBatteryFull: IconDefinition = faBatteryFull;
  public faBatteryHalf: IconDefinition = faBatteryHalf;
  public limit: number = 7;

  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _todoListService: TodoListService,
    private _snackBar: MatSnackBar,
    public _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.listParameter.id >= 1) {
      this.list = this.listParameter;
      this.inGallery = true;
    } else {
      this._activatedRoute.queryParams.subscribe(params => {
        if (params.id && params.id >= 1) {
          this._todoListService.getTodoList(params.id).then(list => this.list = list);
        }
      });
    }

    this.items = [
      { label: 'Categoria', url: '/' },
      { label: 'Todo-List title', url: 'todo-list' },
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
}
