import {NgModule} from '@angular/core';

import {RecordCreatorComponent} from './record-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [RecordCreatorComponent],
  declarations: [RecordCreatorComponent],
  providers: [],
})
export class RecordCreatorModule {
}
