import {NgModule} from '@angular/core';

import {RecordComponent} from './record.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RecordComponent],
  declarations: [RecordComponent],
  providers: [],
})
export class RecordModule {
}
