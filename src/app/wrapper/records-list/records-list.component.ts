import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-records-list',
  templateUrl: 'records-list.component.html',
  styleUrls: ['records-list.component.scss']
})

export class RecordsListComponent implements OnInit {
  records$ = this.store.pipe(select('records'));

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }
}
