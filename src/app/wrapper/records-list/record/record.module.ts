import {NgModule} from '@angular/core';

import {RecordComponent} from './record.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {recordsReducer} from '../../../ngrx/reducers/records.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({record: recordsReducer})
  ],
  exports: [RecordComponent],
  declarations: [RecordComponent],
  providers: [],
})
export class RecordModule {
}
