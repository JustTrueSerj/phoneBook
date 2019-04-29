import {WrapperComponent} from './wrapper.component';
import {TestBed} from '@angular/core/testing';
import {WrapperModule} from './wrapper.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Wrapper Component', () => {
  let fixture;
  let component;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        WrapperModule
      ],
      // schemas: [
      //   NO_ERRORS_SCHEMA
      // ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
  });

  it('Компонент существует', () => {
    expect(component).toBeTruthy();
  });
});
