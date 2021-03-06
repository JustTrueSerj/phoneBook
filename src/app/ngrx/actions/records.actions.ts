import {Action} from '@ngrx/store';
import {RecordModel} from '../../shared/record.model';
import {Update} from '@ngrx/entity';

export const ADD_RECORD = '[Record] Adding record';
export const REMOVE_RECORD = '[Record] Remove record';
export const CHANGE_FAVORITE = '[Record] Change favorite';

export class AddRecordAction implements Action {
  readonly type = ADD_RECORD;
  constructor(readonly payload: RecordModel) {}
}

export class RemoveRecordAction implements Action {
  readonly type = REMOVE_RECORD;
  constructor(readonly payload: RecordModel) {}
}

export class ChangeFavoriteAction implements Action {
  readonly type = CHANGE_FAVORITE;
  constructor(public payload: Update<RecordModel>) {}
}

export type RecordsActions = AddRecordAction | RemoveRecordAction | ChangeFavoriteAction;
