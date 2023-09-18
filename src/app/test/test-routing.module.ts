import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIndexComponent } from './components/test-index/test-index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ObservableVsSubjectComponent } from './components/observable-vs-subject/observable-vs-subject.component';
import { TestLayoutComponent } from './components/test-layout/test-layout.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestLayoutComponent,
    children: [
      {
        path: '',
        component: TestIndexComponent,
      },
      {
        path: 'observable-vs-subject',
        component: ObservableVsSubjectComponent,
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
