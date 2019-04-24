import {Component, Input, OnInit} from '@angular/core';
import {RecordModel} from '../../../shared/record.model';

@Component({
  selector: 'app-record',
  templateUrl: 'record.component.html',
  styleUrls: ['record.component.scss']
})

export class RecordComponent implements OnInit {
  @Input() record: RecordModel;

  constructor() {
  }

  ngOnInit() {
    console.log(this.record);
  }
}
