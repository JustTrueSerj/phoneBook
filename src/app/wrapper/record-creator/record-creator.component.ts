import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AddRecordAction} from '../../ngrx/actions/records.actions';

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
    telephoneNumber: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<any>) {

  }

  addRecord() {
  console.log(this.recordCreatorForm.controls.surname.value);
  const record = {
    isFavorite: false,
    surname: this.recordCreatorForm.controls.surname.value,
    name: this.recordCreatorForm.controls.name.value,
    patronymic: this.recordCreatorForm.controls.patronymic.value,
    telephoneNumber: this.recordCreatorForm.controls.telephoneNumber.value,
    removeThis: false
  };
  this.store.dispatch(new AddRecordAction(record));
  }

  ngOnInit() {

  }
}
