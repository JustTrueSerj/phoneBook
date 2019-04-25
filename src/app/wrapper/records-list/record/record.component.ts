import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RecordModel} from '../../../shared/record.model';
import {Store} from '@ngrx/store';
import {ChangeFavoriteAction, RemoveRecordAction} from '../../../ngrx/actions/records.actions';
import {RootState} from '../../../shared/root-state.model';

@Component({
  selector: 'app-record',
  templateUrl: 'record.component.html',
  styleUrls: ['record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecordComponent implements OnInit {
  @Input() record: RecordModel;

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
  }

  changeFavorite(record) {
    this.record.isFavorite = !this.record.isFavorite;
    this.store.dispatch(new ChangeFavoriteAction(record));
  }

  removeRecord(record) {
    this.store.dispatch(new RemoveRecordAction(record));
  }
}
