import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoIndexComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    AddTodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
