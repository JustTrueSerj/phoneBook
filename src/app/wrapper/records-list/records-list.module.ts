import {NgModule} from '@angular/core';

import {RecordsListComponent} from './records-list.component';
import {RecordModule} from './record/record.module';

@NgModule({
  imports: [RecordModule],
  exports: [RecordsListComponent],
  declarations: [RecordsListComponent],
  providers: [],
})
export class RecordsListModule {
}
