import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestIndexComponent } from './components/test-index/test-index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ObservableVsSubjectComponent } from './components/observable-vs-subject/observable-vs-subject.component';
import { TestLayoutComponent } from './components/test-layout/test-layout.component';

@NgModule({
  declarations: [TestIndexComponent, PageNotFoundComponent, SidebarComponent, ObservableVsSubjectComponent, TestLayoutComponent],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
