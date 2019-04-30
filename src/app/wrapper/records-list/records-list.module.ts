import {NgModule} from '@angular/core';

import {RecordsListComponent} from './records-list.component';
import {RecordModule} from './record/record.module';
import {StoreModule} from '@ngrx/store';
import {recordsReducer} from '../../ngrx/reducers/records.reducer';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RecordModule,
    StoreModule.forRoot({records: recordsReducer}),
    CommonModule,
    FormsModule
  ],
  exports: [RecordsListComponent],
  declarations: [RecordsListComponent],
  providers: [],
})
export class RecordsListModule {
}
