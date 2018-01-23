import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

describe('Component: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let authServiceStub: {
    loggedIn: boolean,
    isAdmin: boolean,
    currentUser: any
  };

  beforeEach(async(() => {
    authServiceStub = {
      loggedIn: false,
      isAdmin: false,
      currentUser: { username: 'Tester' }
    };
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(AuthService);
        fixture.detectChanges();
      });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
