import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootState} from '../../shared/root-state.model';
import {selectRecords} from '../../ngrx/selectors/record.selector';


@Component({
  selector: 'app-records-list',
  templateUrl: 'records-list.component.html',
  styleUrls: ['records-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecordsListComponent {
  records$ = this.store.pipe(select(selectRecords));

  constructor(private store: Store<RootState>) {
  }
}
