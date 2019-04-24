import {Component, Input, OnInit} from '@angular/core';
import {RecordModel} from '../../../shared/record.model';
import {Store} from '@ngrx/store';
import {ChangeFavoriteAction, RemoveRecordAction} from '../../../ngrx/actions/records.actions';

@Component({
  selector: 'app-record',
  templateUrl: 'record.component.html',
  styleUrls: ['record.component.scss']
})

export class RecordComponent implements OnInit {
  @Input() record: RecordModel;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    // console.log(this.record);
  }

  changeFavorite(recordId) {
    this.record.isFavorite = !this.record.isFavorite;
    this.store.dispatch(new ChangeFavoriteAction(recordId));
  }

  removeRecord(recordId) {
    this.store.dispatch(new RemoveRecordAction(recordId));
  }
}
