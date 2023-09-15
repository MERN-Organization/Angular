import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoIndexComponent,
    children: [
      { path: 'list', component: TodoListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'add', component: AddTodoComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
