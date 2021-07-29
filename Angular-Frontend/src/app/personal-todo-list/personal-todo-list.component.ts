import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-todo-list',
  templateUrl: './personal-todo-list.component.html',
  styleUrls: ['./personal-todo-list.component.scss']
})
export class PersonalTodoListComponent implements OnInit {
  public lol: string = "Todo-List title";
  public lol2: string = "Resumen";

  public items: MenuItem[] = [];
  public faPlus = faPlus;

  ngOnInit() {
    this.items = [
      { label: 'Categoria', url: '/' },
      { label: 'Todo-List title', url: 'todo-list' },
    ];
  }
}
