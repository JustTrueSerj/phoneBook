import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootState} from '../../shared/root-state.model';
import {selectRecord, selectRecords} from '../../ngrx/selectors/record.selector';


@Component({
  selector: 'app-records-list',
  templateUrl: 'records-list.component.html',
  styleUrls: ['records-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecordsListComponent implements OnInit {
  records$ = this.store.pipe(select(selectRecords));

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
   this.records$.subscribe(x => console.log('Поток - ',x));
  }
}
