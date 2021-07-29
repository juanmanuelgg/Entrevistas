import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// NgPrime
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria'
import {BreadcrumbModule} from 'primeng/breadcrumb';

// Angular Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { PersonalTodoListComponent } from './personal-todo-list/personal-todo-list.component';
import { GroupTodoBoardComponent } from './group-todo-board/group-todo-board.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FontAwesomeModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    ButtonModule,
    CardModule,
    GalleriaModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
