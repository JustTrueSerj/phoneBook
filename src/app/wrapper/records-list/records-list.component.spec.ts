import {TestBed} from '@angular/core/testing';
import {RecordsListModule} from './records-list.module';
import {RecordComponent} from './record/record.component';

describe('RecordsList component', () => {
  let fixture;
  let component;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RecordsListModule
      ],
      // schemas: [
      //   NO_ERRORS_SCHEMA
      // ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordComponent);
    component = fixture.componentInstance;
  });

  it('Компонент существует', () => {
    expect(component).toBeTruthy();
  });



});


