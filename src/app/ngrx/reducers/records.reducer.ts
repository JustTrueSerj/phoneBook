import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {RecordModel} from '../../shared/record.model';
import {ADD_RECORD, CHANGE_FAVORITE, RecordsActions, REMOVE_RECORD} from '../actions/records.actions';

export interface State extends EntityState<RecordModel> {
}

export const adapter: EntityAdapter<RecordModel> = createEntityAdapter<RecordModel>();

export const initialState: State = adapter.getInitialState();

export function recordsReducer(state = initialState, action: RecordsActions): State {
  switch (action.type) {
    case ADD_RECORD:
      return adapter.addOne(action.payload, state);

    case REMOVE_RECORD:
      return adapter.removeOne(action.payload.id, state);

    case CHANGE_FAVORITE:
      return adapter.updateOne(action.payload, state);

    default:
      return state;
  }
}

// export function recordsReducer(state = initialState, action: RecordsActions) {
//   switch (action.type) {
//
//     case ADD_RECORD:
//       state.records.push(action.payload);
//       return state;
//
//     case REMOVE_RECORD:
//       state.records = state.records.filter(arg => arg.id !== action.payload);
//       return state;
//
//     case CHANGE_FAVORITE:
//       state.records = state.records.map(arg => {
//         if (arg === action.payload) {
//           arg.isFavorite = !arg.isFavorite;
//         }
//         return arg;
//       });
//
//       state.records.sort(sortFavorites);
//
//       return state;
//   }
// }
//
// function sortFavorites(record) {
//   if (record.isFavorite) {
//     return -1;
//   } else {
//     return 1;
//   }
// }
