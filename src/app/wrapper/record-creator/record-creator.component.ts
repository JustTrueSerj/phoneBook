import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AddRecordAction} from '../../ngrx/actions/records.actions';
import {RecordModel} from '../../shared/record.model';
import {RootState} from '../../shared/root-state.model';

@Component({
  selector: 'app-record-creator',
  templateUrl: 'record-creator.component.html',
  styleUrls: ['record-creator.component.scss']
})

export class RecordCreatorComponent {
  recordCreatorForm: FormGroup = this.fb.group({
    surname: ['', Validators.required],
    name: [''],
    patronymic: [''],
    phoneNumber: ['+7', [
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(12)
    ]]
  });
  idCounter = 0;

  constructor(private fb: FormBuilder, private store: Store<RootState>) {

  }

  addRecord() {
    const record: RecordModel = {
      ...this.recordCreatorForm.value,
      id: this.idCounter,
      isFavorite: false
    };
    this.idCounter++;
    this.store.dispatch(new AddRecordAction(record));
    this.recordCreatorForm.reset();
  }
}
