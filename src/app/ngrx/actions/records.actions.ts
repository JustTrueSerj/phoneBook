import {Action} from '@ngrx/store';

export const ADD_RECORD = 'Adding record';

export class AddRecordAction implements Action {
  readonly type = ADD_RECORD;
  constructor(readonly payload: any) {}
}

export type RecordsActions = AddRecordAction;
