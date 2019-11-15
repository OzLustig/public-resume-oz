import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayHelloNavigationComponent } from './say-hello-navigation.component';

describe('SayHelloNavigationComponent', () => {
  let component: SayHelloNavigationComponent;
  let fixture: ComponentFixture<SayHelloNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayHelloNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayHelloNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
