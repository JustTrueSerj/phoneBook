import {ADD_RECORD, CHANGE_FAVORITE, RecordsActions, REMOVE_RECORD} from '../actions/records.actions';

export const initialState = {
  records: [],
};
let lastRequest = [];

export function recordsReducer(state = initialState, action: RecordsActions) {
  switch (action.type) {

    case ADD_RECORD:
      lastRequest.push(action.payload);
      return {...state, records: lastRequest};

    case REMOVE_RECORD:
      lastRequest = lastRequest.filter(arg => arg.id !== action.payload);
      return {...state, records: lastRequest};

    case CHANGE_FAVORITE:
      lastRequest = lastRequest.map(arg => {
        if (arg === action.payload) {
          arg.isFavorite = !arg.isFavorite;
        }
        return arg;
      });

      lastRequest.sort(sortFavorites);

      return {...state, records: lastRequest};
  }
}

function sortFavorites(a) {
  if (a.isFavorite) {
    return -1;
  } else {
    return 1;
  }
}
