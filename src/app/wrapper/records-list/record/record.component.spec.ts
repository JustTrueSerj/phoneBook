import {RecordModule} from './record.module';
import {TestBed} from '@angular/core/testing';
import {RecordComponent} from './record.component';
import {StoreModule, Store} from '@ngrx/store';
import {recordsReducer} from '../../../ngrx/reducers/records.reducer';
import {ChangeFavoriteAction, RemoveRecordAction} from '../../../ngrx/actions/records.actions';

describe('Record Component', () => {
  let fixture;
  let component;
  let store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RecordModule,
        StoreModule.forRoot({records: recordsReducer})
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RecordComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    component.record = {
      id: 1,
      phoneNumber: '+70000000000',
      name: '',
      surname: 'Фамилия2',
      patronymic: '',
      isFavorite: true
    };
  });

  it('Корректное удаление записи', () => {
    component.removeRecord(component.record);
    expect(store.dispatch).toHaveBeenCalledWith(new RemoveRecordAction(component.record));
  });

  it('Корректная операция изменения статуса isFavorite  у записи', () => {
    component.changeFavorite(component.record);
    expect(store.dispatch).toHaveBeenCalledWith(new ChangeFavoriteAction(component.record));

  });

});
