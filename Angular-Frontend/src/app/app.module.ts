import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { PersonalTodoListComponent } from './personal-todo-list/personal-todo-list.component';
import { GroupTodoBoardComponent } from './group-todo-board/group-todo-board.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    PersonalTodoListComponent,
    GroupTodoBoardComponent,
    LoginSignupComponent,
    FrontPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
