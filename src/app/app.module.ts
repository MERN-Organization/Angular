import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TestModule } from './test/test.module';
import { HomeButttonComponent } from './components/home-buttton/home-buttton.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, HomeButttonComponent],
  imports: [BrowserModule, AppRoutingModule, TodoModule, TestModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
