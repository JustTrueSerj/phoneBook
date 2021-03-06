import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
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

export class RecordComponent {
  @Input() record: RecordModel;

  constructor(private store: Store<RootState>) {
  }

  changeFavorite(record) {
    this.record.isFavorite = !this.record.isFavorite;
    // @ts-ignore
    this.store.dispatch(new ChangeFavoriteAction(record));
  }

  removeRecord(record) {
    this.store.dispatch(new RemoveRecordAction(record));
  }
}
