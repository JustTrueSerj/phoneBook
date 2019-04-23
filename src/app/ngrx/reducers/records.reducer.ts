import {ADD_RECORD, AddRecordAction} from '../actions/records.actions';

export const initialState = {
  records: [],
};
const lastRequest = [];

export function recordsReducer(state = initialState, action: AddRecordAction) {
  switch (action.type) {
    case ADD_RECORD:
      lastRequest.push(action.payload);
      return {...state, records: lastRequest};
  }
}

