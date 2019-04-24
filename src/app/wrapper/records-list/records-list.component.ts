import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootState} from '../../shared/root-state.model';
import {selectRecord} from '../../ngrx/selectors/record.selector';

@Component({
  selector: 'app-records-list',
  templateUrl: 'records-list.component.html',
  styleUrls: ['records-list.component.scss']
})

export class RecordsListComponent implements OnInit {
  records$ = this.store.pipe(select(selectRecord));

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
  }
}
