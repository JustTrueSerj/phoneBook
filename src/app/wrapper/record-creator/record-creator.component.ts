import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AddRecordAction} from '../../ngrx/actions/records.actions';
import {RecordModel} from '../../shared/record.model';

@Component({
  selector: 'app-record-creator',
  templateUrl: 'record-creator.component.html',
  styleUrls: ['record-creator.component.scss']
})

export class RecordCreatorComponent implements OnInit {
  recordCreatorForm: FormGroup = this.fb.group({
    surname: ['', Validators.required],
    name: [''],
    patronymic: [''],
    phoneNumber: ['', Validators.required],
  });
  idCounter = 0;

  constructor(private fb: FormBuilder, private store: Store<any>) {

  }

  addRecord() {
  console.log(this.recordCreatorForm.controls.surname.value);
  const record: RecordModel = {
    id: this.idCounter,
    isFavorite: false,
    surname: this.recordCreatorForm.controls.surname.value,
    name: this.recordCreatorForm.controls.name.value,
    patronymic: this.recordCreatorForm.controls.patronymic.value,
    phoneNumber: this.recordCreatorForm.controls.phoneNumber.value
  };
  this.idCounter++;
  this.store.dispatch(new AddRecordAction(record));
  }

  ngOnInit() {

  }
}
