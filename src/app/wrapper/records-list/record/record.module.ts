import {NgModule} from '@angular/core';

import {RecordComponent} from './record.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {recordsReducer} from '../../../ngrx/reducers/records.reducer';
import {ComfortableTelephoneNumberPipe} from '../../../shared/comfortable-telephone-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({record: recordsReducer})
  ],
  exports: [RecordComponent],
  declarations: [RecordComponent, ComfortableTelephoneNumberPipe],
  providers: [],
})
export class RecordModule {
}
