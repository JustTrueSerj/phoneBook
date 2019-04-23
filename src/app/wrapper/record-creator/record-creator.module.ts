import {NgModule} from '@angular/core';

import {RecordCreatorComponent} from './record-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {recordsReducer} from '../../ngrx/reducers/records.reducer';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({records: recordsReducer})
  ],
  exports: [RecordCreatorComponent],
  declarations: [RecordCreatorComponent],
  providers: [],
})
export class RecordCreatorModule {
}
