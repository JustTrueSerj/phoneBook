import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter, State} from '../reducers/records.reducer';
import {RecordModel} from '../../shared/record.model';

export const selectRecord = createFeatureSelector<State>('records');

export const {selectAll} = adapter.getSelectors(selectRecord);

export const isFavorite = (record: RecordModel) => record.isFavorite;
export const isNotFavorite = (record: RecordModel) => !record.isFavorite;

export const favoriteRecords = createSelector(
  selectAll,
  records => records.filter(isFavorite)
);

export const notFavoriteRecords = createSelector(
  selectAll,
  records => records.filter(isNotFavorite)
);

export const selectRecords = createSelector(
  favoriteRecords,
  notFavoriteRecords,
  (favorite, notFavorite) => [
   ...favorite,
    ...notFavorite
  ]
);
console.log('Фильтрация прошла');

