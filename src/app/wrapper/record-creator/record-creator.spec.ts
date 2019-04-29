import {TestBed} from '@angular/core/testing';
import {RecordCreatorComponent} from './record-creator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {recordsReducer} from '../../ngrx/reducers/records.reducer';

describe('RecordCreatorComponent', () => {
  let fixture;
  let component;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [RecordCreatorComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({records: recordsReducer})
      ]
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(RecordCreatorComponent);
    component = fixture.componentInstance;
  });

  it('Компонент существует', () => {
    expect(component).toBeTruthy();
  });

  it('Форма становится валидной после заполнения основных полей', () => {
    component.recordCreatorForm.controls.surname.setValue('Фамилия');
    component.recordCreatorForm.controls.phoneNumber.setValue('+70000000000');
    expect(component.recordCreatorForm.valid).toBeTruthy();
  });

  it('Форма не валидна при не верных обязательных полях', () => {
    component.recordCreatorForm.controls.surname.setValue('');
    component.recordCreatorForm.controls.phoneNumber.setValue('+70000000000');

    expect(!component.recordCreatorForm.valid).toBeTruthy();

    component.recordCreatorForm.controls.surname.setValue('Фамилия');
    component.recordCreatorForm.controls.phoneNumber.setValue('+700000000001');

    expect(!component.recordCreatorForm.valid).toBeTruthy();
  });

  it('Форма не валидна при инициализации компонента', () => {
    expect(component.recordCreatorForm.valid).toBeFalsy();
  });

});


