import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

  }

  sendRecord() {
  console.log(this.recordCreatorForm.controls.surname.value);
  }

  ngOnInit() {

  }
}
