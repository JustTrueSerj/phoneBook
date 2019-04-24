import {ADD_RECORD, CHANGE_FAVORITE, RecordsActions, REMOVE_RECORD} from '../actions/records.actions';

export const initialState = {
  records: [],
};

export function recordsReducer(state = initialState, action: RecordsActions) {
  switch (action.type) {

    case ADD_RECORD:
      state.records.push(action.payload);
      return state;

    case REMOVE_RECORD:
      state.records = state.records.filter(arg => arg.id !== action.payload);
      return state;

    case CHANGE_FAVORITE:
      state.records = state.records.map(arg => {
        if (arg === action.payload) {
          arg.isFavorite = !arg.isFavorite;
        }
        return arg;
      });

      state.records.sort(sortFavorites);

      return state;
  }
}

function sortFavorites(record) {
  if (record  .isFavorite) {
    return -1;
  } else {
    return 1;
  }
}
