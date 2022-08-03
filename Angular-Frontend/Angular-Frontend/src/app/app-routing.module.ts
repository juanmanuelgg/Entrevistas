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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { GroupTodoBoardComponent } from './group-todo-board/group-todo-board.component';
import { PersonalTodoListComponent } from './personal-todo-list/personal-todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: 'home', component: FrontPageComponent },
	{ path: 'login', component: LoginSignupComponent },
	{ path: '', component: GroupTodoBoardComponent },
	{ path: 'todo-list', component: PersonalTodoListComponent },
	{ path: 'todo-item', component: TodoItemComponent },
	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }