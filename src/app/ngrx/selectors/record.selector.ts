import {createFeatureSelector} from '@ngrx/store';
import {RootState} from '../../shared/root-state.model';
import {RecordModel} from '../../shared/record.model';

export const selectRecord = createFeatureSelector<RootState, RecordModel[]>('records');


