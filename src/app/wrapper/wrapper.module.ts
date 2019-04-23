import {NgModule} from '@angular/core';

import {WrapperComponent} from './wrapper.component';
import {RecordCreatorModule} from './record-creator/record-creator.module';

@NgModule({
  imports: [RecordCreatorModule],
  exports: [WrapperComponent],
  declarations: [WrapperComponent],
  providers: [],
})
export class WrapperModule {
}
