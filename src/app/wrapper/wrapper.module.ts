import {NgModule} from '@angular/core';

import {WrapperComponent} from './wrapper.component';
import {RecordCreatorModule} from './record-creator/record-creator.module';
import {RecordsListModule} from './records-list/records-list.module';

@NgModule({
  imports: [
    RecordCreatorModule,
    RecordsListModule
  ],
  exports: [WrapperComponent],
  declarations: [WrapperComponent],
  providers: [],
})
export class WrapperModule {
}
