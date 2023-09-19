import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButttonComponent } from './home-buttton.component';

describe('HomeButttonComponent', () => {
  let component: HomeButttonComponent;
  let fixture: ComponentFixture<HomeButttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeButttonComponent]
    });
    fixture = TestBed.createComponent(HomeButttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
